import bodyParser from "body-parser"

import "./database/db";
import Server from "./server"
import { validateToken } from "./middleware/auth";
import router from "./routes/route";

const app = new Server(3000);


app.addMiddleware(bodyParser.json());
app.addMiddleware(validateToken);
app.addMiddleware(router);
app.listen();
