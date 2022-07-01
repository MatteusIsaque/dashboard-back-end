import mongoose from 'mongoose';

const { Schema } = mongoose

const taskSchame = new Schema({
  title: String,
  description: String,
  completed: String,
  createdIn: String,
  endIn: String,
  owner: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
})

const TaskSchame = mongoose.model("Tasks", taskSchame)


export { TaskSchame }