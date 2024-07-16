import { Schema, Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "email already exists"],
      required: [true, "email is required"],
    },
    userName: {
      type: String,
      required: [true, "UserName is required"],
    },
    image: {
      type: String,
    },
    bookmark: [
      {
        type: Schema.Types.ObjectId,
        ref: "property",
      },
    ],
  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);

export default User;