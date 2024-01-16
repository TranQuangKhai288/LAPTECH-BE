const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var commentSchema = new mongoose.Schema(
  {
    comments: [
      {
        rating: Number,
        comment: String,
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    averageRating: Number,
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("CommentAndRating", commentSchema);
