// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const ArcadeGameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    status: {
      type: String,
      enum: [
        "fighting",
        "sports",
        "strategy",
        "puzzle",
        "arcade",
        "platformer",
        "other"
      ],
      default: "other"
    }
  },
  {
    timestamps: true
  }
);

// Exporting our resource model
module.exports = mongoose.model("ArcadeGame", ArcadeGameSchema);
