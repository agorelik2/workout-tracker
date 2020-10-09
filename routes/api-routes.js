//const db = require("../models");
const Workout = require("../models/workout.js");
module.exports = function (app) {

    // Used by api.js in getLastWorkout()
    app.get("/api/workouts", (req, res) => {
      Workout.find({})
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
    });

    //Used by api.js in createWorkout({})
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
          .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
          })
          .catch((err) => {
            res.json(err);
          });
      });

    //update to find by ID here
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
// Creates a new workout in the workout database
// app.post("/api/workouts", async (req, res) => {
//     try {
//       const dbWorkout = await db.Workout.create({ type: "workout" });
//       res.json(dbWorkout);
//     } catch (err) {
//       console.log("error occurred creating a workout: ", err);
//     }
//   });



}