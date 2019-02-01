// require
const mongoose = require('mongoose');

// connect
mongoose.connect('mongodb://localhost/restTasksAPI', { useNewUrlParser: true});

var TasksSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
}, {timestamps: true})

// setter
mongoose.model('Task', TasksSchema);

