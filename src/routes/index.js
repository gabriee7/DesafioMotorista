import express from "express";
import motoristas from "./motoristaRoutes.js";

const routes = (app) => {
    app.use(
        express.json(),
        motoristas
    )
}

export default routes