import { connect } from "mongoose";

const connectDB = () =>
  connect(`${process.env.MONGO_URL}/e-commerce`)
    .then(() => {
      console.log("Mongodb connected successfully");
    })
    .catch((err) => {
      console.log("Error to connect mongodb " + err);
      process.exit(1);
    });

export default connectDB;
