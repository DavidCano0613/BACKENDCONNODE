const express = require('express')
const categoriesRouter = express.Router()


categoriesRouter.get('/',(req,res)=>{
  res.send("Ruta raiz de categories")
})

categoriesRouter.get('/categories/:categoryId/products/:productId',(req, res) => {
    const { categoryId, idProduct } = req.params;
    console.log(req.params);
    res.json({
      categoryId,
      idProduct,
    });
  }
);

module.exports = {categoriesRouter}
