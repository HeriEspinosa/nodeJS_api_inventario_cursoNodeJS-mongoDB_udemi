const express = require("express");

const { Response } = require("../common/response");
const createError = require("http-errors");

const router = express.Router();

module.exports.IndexAPI = (app) => {
    router.get("/", (req, res) => {
        const menu = {
            products: `https://${req.headers.host}/api/products`,
            users: `https://${req.headers.host}/api/users`,
        };

        Response.success(res, 200, "API Inventario", menu);
    });

    app.use("/", router);
};

module.exports.NotFoundAPI = (app) => {
    router.all("*", () => {
        Response.error(res, new createError.NotFound());
    });

    app.use("/", router);
};
