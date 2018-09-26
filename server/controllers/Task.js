const Task = require('../models/Task');

module.exports = {
    add: function (req, res) {
        let task = new Task(req.body);

        task.save()
            .then(post => res.status(200).json(post))
            .catch(err => res.status(400).send('Unable to save to database'))
    },
    getAll: function (req, res) {
        Task.find(function (err, tasks) {
            if (err) {
                res.status(400).send("There's was an error with retrieving the tasks");
            }
            else {
                res.status(200).json(tasks);
            }
        });
    },

    // Delete Task
    //  Success(200): Return the id that was passed.
    //  Error(400): Return an error msg.
    delete: function (req, res) {
        Task.findByIdAndRemove(req.params.id, function (err, tasks) {
            if (err) {
                res.status(400).send("There's was an error with deleting this record "
                    + err);
            }
            else {
                res.status(200).json(req.params.id);
            }
        });
    },
    update: function (req, res) {
        Task.findByIdAndUpdate(req.params.id, req.body, { new: true },
            function (err, task) {
                if (err) {
                    res.status(400).send("There's was an error with deleting this record "
                        + err);
                }
                else {
                    res.status(200).json(task);
                }
            })
    }
}