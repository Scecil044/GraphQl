const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "completed", "unpaid", "In progress"]
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
