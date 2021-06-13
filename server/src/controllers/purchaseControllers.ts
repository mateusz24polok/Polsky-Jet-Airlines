import { Request, Response, NextFunction } from "express";
import { Purchase } from "../models/purchaseModel";
import { Flight } from "../models/flightModel";
import { User } from "../models/userModel";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";

export const postFlightPurchase = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const flightId = req.params.id;
    const orderingUserId = req.body.orderingUser;
    const purchasedEconomyTickets = req.body.purchasedTickets.economy;
    const purchasedStandardTickets = req.body.purchasedTickets.standard;
    const purchasedPremiumTickets = req.body.purchasedTickets.premium;
    const flight = await Flight.findById(flightId);
    const orderingUser = await User.findById(orderingUserId);
    if (!orderingUser)
      return next(new AppError("User doesn't exist on database", 404));
    if (flight) {
      const availableEconomyTickets = flight.tickets.economy.amount;
      const availableStandardTickets = flight.tickets.standard.amount;
      const availablePremiumTickets = flight.tickets.premium.amount;
      if (
        availableEconomyTickets >= purchasedEconomyTickets &&
        availableStandardTickets >= purchasedStandardTickets &&
        availablePremiumTickets >= purchasedPremiumTickets
      ) {
        const purchase = await Purchase.create(req.body);
        flight.tickets.economy.amount =
          availableEconomyTickets - purchasedEconomyTickets;
        flight.tickets.standard.amount =
          availableStandardTickets - purchasedStandardTickets;
        flight.tickets.premium.amount =
          availablePremiumTickets - purchasedPremiumTickets;
        flight.save();
        await orderingUser.update({ $push: { purchases: purchase._id } });
        res.status(201).json({
          status: "success",
          data: purchase,
        });
      } else {
        return next(new AppError("No available tickets in offer", 400));
      }
    }
    return next(new AppError("Flight doesn't exist in the database", 404));
  }
);
