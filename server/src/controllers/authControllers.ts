import { Request, Response, NextFunction, CookieOptions } from "express";
import jwt from "jsonwebtoken";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";
import { User, UserBaseDocument } from "../models/userModel";

interface JWT {
  id: string;
  iat: number;
  exp: number;
}

const signToken = (id: string) =>
  jwt.sign({ id }, `${process.env.JWT_SECRET}` as string, {
    expiresIn: `${process.env.JWT_EXPIRES_IN}`,
  });

const createSendToken = (
  user: UserBaseDocument,
  statusCode: number,
  res: Response
) => {
  const token = signToken(user._id);

  const cookieOptions: CookieOptions = {
    expires: new Date(
      Date.now() +
        (`${process.env.JWT_COOKIE_EXPIRES_IN}` as unknown as number) *
          24 *
          60 *
          60 *
          1000
    ),
    httpOnly: true,
  };

  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role,
    });

    createSendToken(newUser, 201, res);
  }
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      return next(new AppError("Please provide email and password!", 400));
    }

    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password || ""))) {
      return next(new AppError("Incorect email or password", 401));
    }
    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
  }
);

export const logout = (req: Request, res: Response) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

export const protect = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(
        new AppError("You are not logged in! Please log in to get access", 401)
      );
    }
    // 2) Verification token

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as unknown as jwt.Secret
    );

    // 3) Check if user still exists
    const freshUser = await User.findById((decoded as unknown as JWT).id);

    if (!freshUser) {
      return next(
        new AppError(
          "The user belonging to the token does no longer exist",
          401
        )
      );
    }

    //GRANT ACCESS TO PROTECTED ROUTE
    req.user = freshUser;
    next();
  }
);
