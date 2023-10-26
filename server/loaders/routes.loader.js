/* Routes */
const productRouter = require("../routes/product.routes");

class RoutesLoader {
  static initRoutes(app) {
    app.use(`/api/product`, productRouter);

    app.use("/", async (req, res) => {
      res.status(404).send("No such route found in the API.");
    });
  }
}

module.exports = { RoutesLoader };
