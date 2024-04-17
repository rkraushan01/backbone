// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(process.env.MONGODB_URI);
//       console.log("db connected");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

// Use a global variable to store the state of the database connection
// across invocations of the function in the same instance.
if (!global._mongoClientPromise) {
  global._mongoClientPromise = mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false, // Disable buffering; we want to be sure that commands are sent
    bufferMaxEntries: 0, // and MongoDB driver will not buffer any commands
  }).then(mongoose => {
    return mongoose;
  }).catch(err => {
    // Handle initial connection error here if needed
    console.error('Initial MongoDB connection error:', err);
    throw err; // Rethrow or handle as needed for your application's error handling logic
  });
}

const connectDB = async () => {
  try {
    // Wait for the existing promise to resolve. It will resolve to a Mongoose instance.
    await global._mongoClientPromise;
    console.log("DB connected successfully.");
  } catch (error) {
    console.error("DB connection error:", error);
    // Optional: handle ongoing connection errors here if necessary
    // You might choose to throw these errors or handle them differently depending on your application's needs
  }
};

export default connectDB;
