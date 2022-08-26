const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
    }
})

const Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo