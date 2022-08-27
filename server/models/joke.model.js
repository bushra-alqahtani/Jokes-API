const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: true,
      minlength: [10, "min 10 chars"],
    },
    punchline: {
      type: String,
      required: true,
      minlength: [3, "min 3 chars"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", JokeSchema);
