import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/colores"; //bd local
const url = "mongodb+srv://TomasBudeguer:KJI5kQLnLz619pLl@cluster0.vjacqdu.mongodb.net/paleta-colores";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD conectada");
});
