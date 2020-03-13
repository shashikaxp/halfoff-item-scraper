import { middleware } from "./middleware/index";
import authRouter from "./api/auth/auth.router";
import halfOffItemsRouter from "./api/halfOffItems/halfOffItems.router";
import cronJob from "./cron-jobs/weekly-prices";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
require("./db/connection");

app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/halfOffItems", middleware.checkedAuth, halfOffItemsRouter);

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);
// cronJob();

export default app;
