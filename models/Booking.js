const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    startCity: {
      type: String,
    },
    destination: {
      type: String,
    },
    seats: {
      type: Array,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: Date,
    },
  },
  { collection: "buses" }
);

module.exports = mongoose.model("booking", BookingSchema);
