import React ,{useState} from 'react'
import Todo from './Todo';
import Todoform from './Todoform';



function Todolist() {

    const [todos, setTodos]=useState([]);


    const addTodo=(todo)=>{

        if(!todo.text || /^\s*$/.test(todo.text))
        {
            return 
        }
        const newTodos = [todo,...todos];
        setTodos(newTodos);
        //console.log(todos);

    }

    const completeTodo=id=>{
        let updatedTodos =todos.map(todo=>{
            if(todo.id ===id )
            {
                todo.isComplete= !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    const removeTodo=id=>{
        const removeArr = [...todos].filter(todo=> todo.id !==  id)
        setTodos(removeArr)
    }

    const updateTodo=(newVal, id)=>{
        if(!newVal.text || /^\s*$/.test(newVal.text)) 
          return;

        setTodos(prev => prev.map(item => (item.id === id) ? newVal : item))
        
    }
    
    
    return (
        <div>
            <h1>What's your plan for today?</h1>
            <Todoform onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>

        </div>
    )
}

export default Todolist;
