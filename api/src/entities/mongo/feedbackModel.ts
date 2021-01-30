import mongoose, { Schema } from 'mongoose';

const feedbackSchema: Schema = new Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: new Date()
  }
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);