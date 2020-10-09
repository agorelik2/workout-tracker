// Dependencies: require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now,
      // default: () => new Date()
    },
    exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter workout type: resistance or cardio",
          },
          name: {
            type: String,
            trim: true,
            required: "Enter the name of the exercise",
          },
          duration: {
            type: Number,
            required: "Enter an exercise duration in minutes",
          },
          weight: {
            type: Number,
          },
          reps: {
            type: Number,
          },
          sets: {
            type: Number,
          },
          distance: {
            type: Number,
          },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;