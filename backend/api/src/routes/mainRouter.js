const {Router} = require ("express");
const mainRouter = Router();

app.get("/users", (req, res)=>{ 
    res.status(200).send("aqui estan todos los productos");
});

app.get("/users/:id", (req, res)=>{ 
    res.status(200).send("detalle del producto");
});


app.post("/users", (req, res)=>{ 
    res.status(200).send("Crear Usuario");
});