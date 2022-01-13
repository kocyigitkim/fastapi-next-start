import { NextApplication, NextFileResolverPlugin, NextOptions } from "fastapi-next";

const options = new NextOptions();
options.cors = {
    origin: "*",
    methods: "*",
    preflightContinue: true,
    optionsSuccessStatus: 204,
};
options.routerDirs.push(__dirname + "/routers");
options.port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
options.debug = process.env.NODE_ENV === "development";
const app = new NextApplication(options);

async function main() {

    // ? Plugins
    app.registry.register(new NextFileResolverPlugin());

    // ? Session
    app.registerInMemorySession();

    // ? Init
    await app.init();

    // ? Start
    await app.start();
}
main();