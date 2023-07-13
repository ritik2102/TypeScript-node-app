import { Router } from 'express';
// named exports are imported this way using curly braces
import { Todo } from '../models/todo';

let todos:Todo[] =[];
const router=Router();

type RequestBody={text: string};
type RequestParams={todoId: string};


router.get('/',(req,res,next)=>{
    res.status(200).json({todos: todos})
})

router.post('/todo',(req,res,next)=>{
    const body=req.body as RequestBody;
    const newTodo: Todo={
        id:new Date().toISOString(),
        text:req.body.text,
    };
    console.log(req.body.text);
    todos.push(newTodo);
    res.status(201).json({"message":"success"});
})


router.put('/todo/:todoId',(req,res,next)=>{
    console.log("reaching here");
    const params=req.params as RequestParams;
    const body=req.body as RequestBody;
    const id=params.todoId;
    const index=todos.findIndex(todoItem => todoItem.id === id);
    
    if(index>=0){
        todos[index]={id:id,text: req.body.text};
        return res.status(200).json({"message":"success"});
    }
    return res.status(404).json({"message":"not found"});
})

router.delete('/todo/:todoId',(req,res,next)=>{

    const body=req.body as RequestBody;
    const params=req.params as RequestParams;
    todos=todos.filter(todoItem=>todoItem.id !== params.todoId);
    res.status(200).json({"message":"success",todos: todos});
})


export default router;