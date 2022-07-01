import mongoose from "mongoose";


try {
  mongoose.connect(`mongodb+srv://maIS:8nTzIhqKnco0phAm@cluster0.jpm8k.mongodb.net/isaquesestudios`)
} catch (error) {
  console.log(error)
}

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

export { db }