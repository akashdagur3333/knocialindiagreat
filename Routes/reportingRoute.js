const  express =require('express');
const router = express.Router();

var ReportingController =require('../controller/ReportingController');
var RecieptController =require('../controller/recieptController');
var FineController =require('../controller/fineController');
var otherController =require('../controller/otherController');

var FineWaiverController =require('../controller/fineWaiverController');
var VsrWaiverController =require('../controller/VsrWaiverController');
var OtherWaiverController =require('../controller/otherWaiverController');

var intrainingController =require('../controller/inTrainingController');

router.post('/reporting',ReportingController.addReporting);
router.get('/reporting',ReportingController.getAllReporting);
router.delete('/reporting/:id',ReportingController.deleteReporting);
router.put('/reporting/:id',ReportingController.updateReporting);
router.post('/validate',ReportingController.validate);
router.put('/reporting/Pending_value/:id',ReportingController.updatePendingAmount);
router.put('/reporting/JobStatus/:id',ReportingController.updateJobstatus);

router.post('/reciept',RecieptController.addReciept);
router.get('/reciept',RecieptController.getAllReciept);
router.delete('/reciept/:id',RecieptController.deleteReciept);

router.post('/fine',FineController.addFine);
router.get('/fine',FineController.getAllFine);
router.delete('/fine/:id',FineController.deleteFine);

router.post('/fineWaiver',FineWaiverController.addFineWaiver);
router.get('/fineWaiver',FineWaiverController.getAllFineWaiver);
router.delete('/fineWaiver/:id',FineWaiverController.deleteFineWaiver);


router.post('/vsrWaiver',VsrWaiverController.addVsrWaiver);
router.get('/vsrWaiver',VsrWaiverController.getAllVsrWaiver);
router.delete('/vsrWaiver/:id',VsrWaiverController.deleteVsrWaiver);


router.post('/other',otherController.addOther);
router.get('/other',otherController.getAllOther);
router.delete('/other/:id',otherController.deleteOther);

router.post('/otherWaiver',OtherWaiverController.addOtherWaiver);
router.get('/otherWaiver',OtherWaiverController.getAllOtherWaiver);
router.delete('/otherWaiver/:id',OtherWaiverController.deleteOtherWaiver);



router.post('/intraining',intrainingController.addIntraining);

module.exports=router;