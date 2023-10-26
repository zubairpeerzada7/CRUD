require("dotenv").config();
const { ExpressLoader } = require("./loaders/express.loader.js");
const { DatabaseLoader } = require("./loaders/database.loader.js");
const { RoutesLoader } = require("./loaders/routes.loader.js");

const app = ExpressLoader.init();

// load database
DatabaseLoader.init();

RoutesLoader.initRoutes(app);

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
