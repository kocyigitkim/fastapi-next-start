import { NextContext } from "fastapi-next";

export interface AppSession {
}

export interface AppContext<T = any> extends NextContext<T> {
    session: AppSession;
}