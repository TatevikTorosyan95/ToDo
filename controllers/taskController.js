const Task = require("../model/task.js")

exports.addTask = function (req, res) {
    const task = new Task({
        text: req.body.text
    })

    task.save(function(err, doc) {
        if(err) {
            res.send(err)
        }
        res.send(doc)
    })
}


exports.getTasks = function(req, res) {
    Task.find({}, (err, docs) => {
        if(err) {
            res.send(err)
        }
        res.send(docs)
    })
}

exports.updTasks = function(req, res) {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, {status : true}, function(err, doc){
        if(err) {
            res.send(err)
        }
        res.send(doc)
    })
    
}

exports.delTasks = function(req, res) {
    const id = req.params.id;
    Task.findByIdAndRemove(id, function(err, doc){
        if(err) {
            res.send(err)
        }
        res.send(doc)
    })
}