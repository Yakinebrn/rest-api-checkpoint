import { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    firstName: { type: String, minLength: 3, maxLength: 20, required: true },
    lastName: { type: String, minLength: 3, maxLength: 20, required: true },
    email: {
      type: String,
      required: true,
      validate: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "not valid email"],
      unique: true,
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);


const UserModel = model('User', userSchema);

export default UserModel;