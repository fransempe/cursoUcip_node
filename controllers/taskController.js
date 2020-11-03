const taskModule = require('../modules/Task')

exports.getTasks = (req, res) => {
    res.status(201).json(taskModule.Task);
}

//exports.saveTask();