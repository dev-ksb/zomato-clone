import mongoose from "mongoose";

export default async () => {
  const mongoDB = process.env.MONGODB_URI;
  return mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection established."));
};
