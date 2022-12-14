import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  dob: string;
  fatherName: string;
  address: string;
  docType: string;
  docNum: string;
  email: string;
  image?: string;
  score?: number;
  responses?: [{ qId: mongoose.Types.ObjectId; answer: string }];
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Name is required'],
      minLength: [4, 'Must be at least 4 character long, but got {value}'],
    },
    dob: {
      type: String,
      trim: true,
      minLength: [4, 'Must be at least 8 character long, but got {value}'],
      required: [true, 'Date of birth is required'],
    },
    fatherName: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: [4, 'Must be at least 4 character long, but got {value}'],
      required: [true, 'Father Name is required'],
    },
    address: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: [4, 'Must be at least 4 character long, but got {value}'],
      required: [true, 'Address is required'],
    },
    docType: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Document Type is required'],
    },
    docNum: {
      type: String,
      trim: true,
      lowercase: true,
      // unique: true,
      required: [true, 'Document Number is required'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'Email is required'],
    },
    image: {
      type: String,
      trim: true,
    },
    score: {
      type: Number,
    },
    responses: [
      {
        qId: mongoose.Schema.Types.ObjectId,
        answer: String,
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
const User = mongoose.model('user', UserSchema);

export default User;
