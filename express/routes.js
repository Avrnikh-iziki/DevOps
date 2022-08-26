const express = require('express');
const router = express.Router();
const todo = require('./controller')

router.get('/', todo.all)
    .post('/', todo.add)
    .delete('/:id',todo.remove)

module.exports = router