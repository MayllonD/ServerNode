import mongoose from "mongoose";

mongoose.connect("mongodb+srv://senac:123@Senac.hnufj.mongodb.net/Senac-node");

let db = mongoose.connection;

export default db;
