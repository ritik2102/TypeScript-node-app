import { Router } from 'express';
// named exports are imported this way using curly braces
import { Todo } from '../models/todo';

let todos:Todo[] =[];
const router=Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({todos: todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo: Todo={
        id:new Date().toISOString(),
        text:req.body.text,
    };
    console.log(req.body.text);
    todos.push(newTodo);
    res.status(201).json({"message":"success"});
})


router.put('/todo/:Id',(req,res,next)=>{
    console.log("reaching here");
    const id=req.params.Id;
    const index=todos.findIndex(todoItem => todoItem.id === id);
    
    if(index>=0){
        todos[index]={id:id,text: req.body.text};
        return res.status(200).json({"message":"success"});
    }
    return res.status(404).json({"message":"not found"});
})

router.delete('/todo/:id',(req,res,next)=>{

    todos=todos.filter(todoItem=>todoItem.id !== req.params.id);
    res.status(200).json({"message":"success",todos: todos});
})


export default router;