const  express =require('express');
const router = express.Router();

var HrActivityController =require('../controller/hrActivityController');

var HrMeetingController =require('../controller/hrMeetingController');

var DirectorMeetingController =require('../controller/directorMeetingController');


router.post('/Activity',HrActivityController.addHrActivity);
router.get('/Activity',HrActivityController.getAllHrActivity);
router.delete('/Activity/:id',HrActivityController.deleteHrActivity);
router.put('/Activity/:id',HrActivityController.updateHrActivity);



router.post('/HrMeeting',HrMeetingController.addHrMeeting);
router.get('/HrMeeting',HrMeetingController.getAllHrMeeting);
router.delete('/HrMeeting/:id',HrMeetingController.deleteHrMeeting);
router.put('/HrMeeting/:id',HrMeetingController.updateHrMeeting);


router.post('/DirectorMeeting',DirectorMeetingController.addDirectorMeeting);
router.get('/DirectorMeeting',DirectorMeetingController.getAllDirectorMeeting);
router.delete('/DirectorMeeting/:id',DirectorMeetingController.deleteDirectorMeeting);
router.put('/DirectorMeeting/:id',DirectorMeetingController.updateDirectorMeeting);

module.exports=router;