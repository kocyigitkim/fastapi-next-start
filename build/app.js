"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastapi_next_1 = require("fastapi-next");
const options = new fastapi_next_1.NextOptions();
options.cors = {
    origin: "*",
    methods: "*",
    preflightContinue: true,
    optionsSuccessStatus: 204,
};
options.routerDirs.push(__dirname + "/routers");
options.port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
options.debug = process.env.NODE_ENV === "development";
const app = new fastapi_next_1.NextApplication(options);
async function main() {
    // ? Session
    app.registerInMemorySession();
    // ? Init
    await app.init();
    // ? Start
    await app.start();
}
main();
