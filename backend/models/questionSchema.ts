import mongoose from 'mongoose';

export interface IQuestion extends mongoose.Document {
  statement: string;
  answer: string;
  explanation: string;
  options: { value: string; text: string }[];
  createdAt?: string;
  updatedAt?: string;
}
const questionSchema = new mongoose.Schema(
  {
    statement: {
      type: String,
      trim: true,
      required: [true, 'Statement is required'],
    },
    answer: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'answer is required'],
    },

    explanation: {
      type: String,
      trim: true,
    },
    options: [
      {
        value: {
          type: String,
          trim: true,
          lowercase: true,
          required: [true, 'Option is required'],
        },
        text: {
          type: String,
          trim: true,
          required: [true, 'Option is required'],
        },
        _id: { id: false },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Question = mongoose.model('question', questionSchema);

export default Question;
