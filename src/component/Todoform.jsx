import React, {useState,useRef, useEffect} from 'react'

export default function Todoform(props) {
    const [inputValue, setinputValue]=useState('');
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })
    
    const handleInputChange=e=>{
        setinputValue(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()),
            text:inputValue
        });
        //setinputValue('');
    }

    return (
       <form className='todo-form' onSubmit={handleSubmit}>
           <input type="text" placeholder="Add a todo" value={inputValue} name="text" className="todo-input" onChange={handleInputChange} ref={inputRef}/>
           <button className='todo-button'>Add Todo</button>
       </form>
    )
}
