const router = express().Router();
const productControllers = require('../controllers/products')

router.get('/count', productControllers.getProductsCount );

router.get('/:id', productControllers.getProductsDetails);

router.delete('/:id',(req, res) =>{

});

router.put('/:id',(req, res) =>{

});


module.export = router;