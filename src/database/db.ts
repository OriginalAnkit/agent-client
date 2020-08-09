import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/agency", { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.info('Connected to Mongo via Mongoose');
});
mongoose.connection.on('error', (err:any) => {
    console.error('Unable to connect to Mongo via Mongoose');
});