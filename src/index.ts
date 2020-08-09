import bodyParser from "body-parser"

import "./database/db";
import Server from "./server";
import { validateToken } from "./middleware/auth";
import router from "./routes/route";
import projectContant from "./constantserver";

const app = new Server(projectContant.PORT);


app.addMiddleware(bodyParser.json());
app.addMiddleware(validateToken);
app.addMiddleware(router);
app.listen();
