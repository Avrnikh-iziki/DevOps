const Todo = require('./models')
const add = async (req, res) => {
    try {
        await Todo.create({ "todo": req.body.todo })
        return res.sendStatus(201)
    } catch (err) {
        return res.sendStatus(400)
    }
}
const all = async (req, res) => {
    Todo.find({}, (err, todo) => {
        if (err) return res.json({ err })
        else return res.json({ todo })
    })
}
const remove = async (req, res) => {
    const { id } = req.params
    Todo.findByIdAndDelete(id, (err, docs) => {
        if (err) return res.sendStatus(400)
        else return res.sendStatus(201)
    })
}

module.exports = {
    add,
    all,
    remove
}