const express=require('express');
const router=express.Router();
const {getAllTasks}=require('../controllers/tasks')
const {createTask}=require('../controllers/tasks')
const {getTask}=require('../controllers/tasks')
const {updateTask}=require('../controllers/tasks')
const {deleteTask}=require('../controllers/tasks')

router.route('/').get(getAllTasks)     
router.route('/').post(createTask)
router.route('/:id').get(getTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)
module.exports=router