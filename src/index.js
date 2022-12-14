
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const apicache = require('apicache')
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();

const cache = apicache.middleware
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cache('2 minutes'))
app.use("/api/v1/workouts", v1WorkoutRouter);



app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});