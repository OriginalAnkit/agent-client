import express from "express";
import * as http from "http";
class Server {
    private app: express.Application;

    constructor(private port: number) {
        this.app = express();
    }

    public addMiddleware(middleware: any) {
        this.app.use(middleware);
    }
    public listen(): http.Server {
        console.log(`=============== listening at port ${this.port} ====================`)
        return this.app.listen(this.port)
    }

}

export default Server