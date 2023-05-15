const  express =require('express');
const router = express.Router();

 var ClientController =require('../controller/ClientController');
 var ProjectController =require('../controller/projectController');
 var OrderController =require('../controller/addOrderController');
 var InvoiceController =require('../controller/clientInvoiceController');




router.post('/client',ClientController.addClient);
router.get('/client',ClientController.getAllClient);
router.delete('/client/:id',ClientController.deleteClient);
router.put('/client/:id',ClientController.updateClient);


router.post('/project',ProjectController.addProject);
router.get('/project',ProjectController.getAllProject);
router.delete('/project/:id',ProjectController.deleteProject);
router.put('/project/:id',ProjectController.updateProject);


router.post('/order',OrderController.addOrder);
router.get('/order',OrderController.getAllOrder);
router.delete('/order/:id',OrderController.deleteOrder);
router.put('/order/:id',OrderController.updateOrder);

router.post('/invoice',InvoiceController.addInvoice);
router.get('/invoice',InvoiceController.getAllInvoice);
router.delete('/invoice/:id',InvoiceController.deleteInvoice);
router.put('/invoice/:id',InvoiceController.updateInvoice);



module.exports=router;