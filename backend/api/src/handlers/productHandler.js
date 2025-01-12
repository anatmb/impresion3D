const getProductHandler=(req,res) =>{
    res.status(200).send("aqui estan todos los prodcutos")
}

const getDetailtHandler=(req,res) =>{
    res.status(200).send("detalle del producto pprobando")
}


const postProductHandler = (req, res) => { 
    res.status(200).send("Crear producto");
};

module.exports={
    getProductHandler,
    getDetailtHandler,
    postProductHandler,
}