import mongoose from 'mongoose';

interface IUser {
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
      unique: true,
      required: [true, 'Document Number is required'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'Email is required'],
      // validate: {
      //   validator: async function (email: string,this:any``) {
      //     const user = await UserSchema.findOne({ email });
      //     if (user) {
      //       return false;
      //     }
      //     return true;
      //   },
      //   message: (props) => 'The specified email address is already in use.',
      // },
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
// UserSchema.post('validate', function (error: any, doc: any, next: any) {
//   const { email } = this;
//   console.log('first');
//   if (error.name === 'MongoError' && error.code === 11000) {
//     console.log('22222222');
//     next(new Error(`${email} is already registered`));
//   } else {
//     console.log('3333333333333');
//     next();
//   }
// });
const User = mongoose.model('user', UserSchema);

export default User;
