const db = require("../models");

module.exports = function (app) {

    // Used by api.js in getLastWorkout()
    app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
    });

    //Used by api.js in createWorkout({})
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
          .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
          })
          .catch((err) => {
            res.json(err);
          });
      });
    




}