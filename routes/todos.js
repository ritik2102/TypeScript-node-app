"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/delete/:id', (req, res, next) => {
    console.log("reaching here");
    const id = req.params.id;
    let found = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos.splice(i, 1);
            found = true;
        }
    }
    if (!found) {
        res.status(404).json({ "message": "item not found" });
    }
    res.status(200).json({ "message": "success" });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    console.log(req.body.text);
    todos.push(newTodo);
    res.status(200).json({ "message": "success" });
});
exports.default = router;
