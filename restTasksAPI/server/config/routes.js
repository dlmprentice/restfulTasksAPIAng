// require
const mongoose = require('mongoose');
var Task = mongoose.model('Task');
var tasks = require('../controllers/restTasksAPI.js');

module.exports = function(app){
// routes
    app.get('/tasks', function(req, res) {
        tasks.getAllTasks(req, res);
    })  

    app.get('/tasks/:id', function(req, res) {
        tasks.getTaskById(req, res);
    })

    app.post('/tasks/new', function(req, res) {
        tasks.createNewTask(req, res);
    })

    app.put('/tasks/:id', function(req, res) {
        tasks.updateTaskById(req, res);
    })

    app.delete('/tasks/:id', function(req, res) {
        tasks.deleteTaskById(req, res);
    })
}

