const mongoose = require("mongoose");
const url =
  "mongodb+srv://node-roomers:" +
  process.env.Mongo_Pw +
  "@node-roomers.um1in.mongodb.net/rooners?retryWrites=true&w=majority";
const connetDB = async () => {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected mongodb");
};

module.exports = connetDB;
