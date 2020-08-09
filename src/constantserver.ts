import dotenv from "dotenv";
import path from "path"
let constants: any = dotenv.config({ path: path.join(__dirname, "../.env") });

export ={
    PORT: constants.PORT,
    SECRET: constants.SECRET
}