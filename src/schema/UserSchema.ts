
import mongoose from 'mongoose';


const { Schema, model } = mongoose

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  createdIn: String,
  admin: {
    default: false,
    type: Boolean,
  },
  employee: {
    type: Boolean
  },
  position: [
    String
  ],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tasks"
  }],
  refreshToken: {
    type: String
  }
})


const UserSchema = model("User", userSchema)


export { UserSchema }