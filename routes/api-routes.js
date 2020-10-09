const db = require("../models");

module.exports = function (app) {

    // Used by api.js in getLastWorkout()
    app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
        .then((workout) => {
          res.json(workout);
        })
        .catch((err) => {
          res.json(err);
        });
    });






}