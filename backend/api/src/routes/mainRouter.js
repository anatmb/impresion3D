const {Router} = require ("express");

const { getProductHandler, getDetailtHandler, postProductHandler} =require("../handlers/productHandler");
const mainRouter = Router();

mainRouter.get("/", getProductHandler);
mainRouter.get("/:id", getDetailtHandler);
mainRouter.post("/", postProductHandler);


module.exports = mainRouter