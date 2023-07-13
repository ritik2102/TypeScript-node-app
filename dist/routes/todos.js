"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    console.log(req.body.text);
    todos.push(newTodo);
    res.status(201).json({ "message": "success" });
});
router.put('/todo/:todoId', (req, res, next) => {
    console.log("reaching here");
    const params = req.params;
    const body = req.body;
    const id = params.todoId;
    const index = todos.findIndex(todoItem => todoItem.id === id);
    if (index >= 0) {
        todos[index] = { id: id, text: req.body.text };
        return res.status(200).json({ "message": "success" });
    }
    return res.status(404).json({ "message": "not found" });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const body = req.body;
    const params = req.params;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({ "message": "success", todos: todos });
});
exports.default = router;
