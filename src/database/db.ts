import mongoose from "mongoose";
import constantServer from "../constantserver";

mongoose.connect(constantServer.MONGOURL, { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.info('Connected to Mongo via Mongoose');
});
mongoose.connection.on('error', (err: any) => {
    console.error('Unable to connect to Mongo via Mongoose');
});