import express from "express";
import cors from "cors";

const app = express();

const port: number | string = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.send("<h1>Main Page from API</h1>");
});

app.get(
  "/api/v1/airports",
  (req: express.Request, res: express.Response): void => {
    res.status(200).json({
      tours: [
        { id: 0, airport: "London" },
        { id: 1, airport: "Warsaw" },
        { id: 2, airport: "Barcelona" },
      ],
    });
    res.end();
  }
);

app.listen(port, () => {
  console.log("Listening has been started");
});
