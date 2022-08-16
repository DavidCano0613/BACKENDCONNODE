const express = require('express')
const Products = require('../services/productsService.js')
const productsRouter = express.Router()

const productsService = new Products;

productsRouter.get('/', async (req,res,next)=>{
    try{
      const allProducts = await productsService.find()
      res.json(allProducts);
    }
    catch(error){
      next(error)
    }
  }
)

// productsRouter.get('/guid', async (req,res)=>{
//   const {guid} = req.params
//   try{
//     const oneProduct = await productsService.findOne(guid)
//   } catch(error){
//     next(error);
//   }
// })

// productsRouter.post('/guid', async (req,res)=>{
//   const {guid} = req.params
//   try{
//     const oneProduct = await productsService.findOne(guid)
//   } catch(error){
//     next(error);
//   }
// })

// productsRouter.patch('/guid', async (req,res)=>{
//   const {guid} = req.params
//   try{
//     const oneProduct = await productsService.patch(guid)
//   } catch(error){
//     next(error);
//   }
// })

// productsRouter.delete('/guid', async (req,res)=>{
//   const {guid} = req.params
//   try{
//     const oneProduct = await productsService.delete(guid)
//   } catch(error){
//     next(error);
//   }
// })

// productsRouter.get('/', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.send('No hay parametros');
//   }
// });

module.exports = {productsRouter}
