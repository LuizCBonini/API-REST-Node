import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://luiz:321@alura.2km6tnf.mongodb.net/Alura-Node");

let db = mongoose.connection;

export default db;