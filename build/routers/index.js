"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastapi_next_1 = require("fastapi-next");
async function default_1(ctx) {
    var response = new fastapi_next_1.ApiResponse();
    response.setSuccess("Hello World");
    return response;
}
exports.default = default_1;
