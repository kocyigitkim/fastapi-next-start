import { ApiResponse } from "fastapi-next";
import { AppContext } from "../AppContext";

export default async function (ctx: AppContext){
    var response = new ApiResponse();
    response.setSuccess("Hello World");
    return response;
}