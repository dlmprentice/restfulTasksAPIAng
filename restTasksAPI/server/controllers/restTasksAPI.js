// require 
const mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    getAllTasks: function(req, res) {
        console.log("All Tasks!!!!!!!");
        Task.find({}, function(err, tasks) {
            if(err) {
                console.log('Error retrieving the tasks');
                res.json({message: 'Error retrieving the tasks', error: err});
            } else {
                if(!tasks) {
                    console.log('Task not found');
                    res.json({message: 'Task not found', tasks: tasks});
                } else {
                    console.log('Success, Tasks Found');
                    res.json({message: 'Success, Tasks Found', tasks: tasks});
                }
            }
        })
    },

    getTaskById: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task) {
            if(err) {
                console.log('Error retrieving the task by ID');
                res.json({message: 'Error retrieving the task by ID', error: err});
            } else {
                if(!task) {
                    console.log('Task ID not found');
                    res.json({message: 'Task ID not found', task: task});
                } else {
                    console.log('Success ID found');
                    res.json({message: 'Success ID found', task: task});
                }
            }
        })
    },

    createNewTask: function(req, res) {
        var task = new Task(req.body);
        task.save(function(err) {
            if(err) {
                console.log('Error saving a new task');
                res.json({message: 'Error saving a new task', error: err});
            } else {
                console.log('Task saved successfully');
                res.json({message: 'Success Task Saved'});
            }
        })
    },

    updateTaskById: function(req, res) {
        Task.updateOne({_id: req.params.id}, {$set: req.body}, function(err) {
            if(err) {
                console.log('Error updating by Task ID');
                res.json({message: 'Error updating by Task ID', error: err});
            } else {
                console.log('Succcess Task updated by ID');
                res.json({message: 'Success Task updated by ID', task: req.body});
            }
        })
    },

    deleteTaskById: function(req, res) {
        Task.deleteOne({_id: req.params.id}, function(err, task) {
            if(err) {
                console.log('Error deleting by Task ID');
                res.json({message: 'Error deleting by Task ID', error: err});
            } else {
                console.log('Success task deleted by ID');
                res.json({message: 'Success task deleted by ID, task: task'});
            }
        })
    }
}





