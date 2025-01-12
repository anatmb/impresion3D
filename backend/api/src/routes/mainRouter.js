const {Router} = require ("express");
const mainRouter = Router();

mainRouter.get("/users", (req, res)=>{ 
    res.status(200).send("aqui estan todos los productos");
});

mainRouter.get("/users/:id", (req, res)=>{ 
    res.status(200).send("detalle del producto");
});


mainRouter.post("/users", (req, res)=>{ 
    res.status(200).send("Crear Usuario");
});

module.exports = mainRouter