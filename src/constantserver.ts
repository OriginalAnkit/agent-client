import dotenv from "dotenv";
import path from "path"
let constants: any = dotenv.config({ path: path.join(__dirname, "../.env") }).parsed;
export ={
    PORT: constants.PORT,
    SECRET: constants.SECRET,
    MONGOURL: constants.MONGOURL
}