
const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const apicache = require('apicache')
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const app = express();

const cache = apicache.middleware
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cache('2 minutes'))
app.use("/api/v1/workouts", v1WorkoutRouter);

// app.use( (request, response, next) => {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});