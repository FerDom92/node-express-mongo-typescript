import { model, Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: false
    },
    age: {
      type: Number,
      required: false
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const UserModel = model('users', UserSchema)

export default UserModel