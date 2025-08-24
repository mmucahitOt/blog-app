const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const authRouter = require("./controllers/auth");
const apiRouter = require("./controllers/api/api");
const testRouter = require("./controllers/test");
const { feedDataForProd } = require("./utils/feed_data_for_prod");
const { feedDataForDev } = require("./utils/feed_data_for_dev");
const { feedDataForTest } = require("./utils/feed_data_for_test");

const app = express();

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
    console.log(config.NODE_ENV);
    if (config.NODE_ENV === "production") {
      feedDataForProd();
    }
    if (config.NODE_ENV === "development") {
      feedDataForDev();
    }
    if (config.NODE_ENV === "test") {
      //feedDataForTest();
    }
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/health", (req, res) => {
  res.send("ok!");
});

app.use("/auth", authRouter);

if (config.NODE_ENV === "test") {
  app.use("/testing", testRouter);
}

app.use("/api", apiRouter);

// Serve React app for client-side routing (catch all non-API routes)
app.get(/^(?!\/api|\/auth|\/testing|\/health).*/, (req, res) => {
  res.sendFile("dist/index.html", { root: __dirname });
});

app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

module.exports = app;
