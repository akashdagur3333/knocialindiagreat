"use strict";

var express = require('express');

var router = express.Router();

var training_batchesController = require('../controller/training_batchesController');

var collegeController = require('../controller/collegesController');

var driveController = require('../controller/driveController');

var studentsController = require('../controller/studentsController');

var testQuestionController = require('../controller/testQuestionController');

var trainingTestController = require('../controller/trainingTestController');

router.post('/training_batches', training_batchesController.addBatches);
router.get('/training_batches', training_batchesController.getAllBatches);
router["delete"]('/training_batches/:id', training_batchesController.deleteBatches);
router.put('/training_batches/:id', training_batchesController.updateBatches);
router.post('/colleges', collegeController.addColleges);
router.get('/colleges', collegeController.getAllColleges);
router["delete"]('/colleges/:id', collegeController.deleteColleges);
router.put('/colleges/:id', collegeController.updateColleges);
router.put('/collegesStatus/:id', collegeController.addPanel);
router.post('/drives', driveController.addDrives);
router.get('/drives', driveController.getAllDrives);
router["delete"]('/drives/:id', driveController.deleteDrives);
router.put('/drives/:id', driveController.updateDrives);
router.post('/students', studentsController.addStudents);
router.get('/students', studentsController.getAllStudents);
router["delete"]('/students/:id', studentsController.deleteStudents);
router.put('/students/:id', studentsController.updateStudents);
router.post('/question', testQuestionController.addQuestion);
router.get('/question', testQuestionController.getAllQuestion);
router["delete"]('/question/:id', testQuestionController.deleteQuestion);
router.post('/trainingTest', trainingTestController.addTest);
router.get('/trainingTest', trainingTestController.getAllTest);
router["delete"]('/trainingTest/:id', trainingTestController.deleteTest);
router.put('/trainingTest/:id', trainingTestController.updateTest);
module.exports = router;