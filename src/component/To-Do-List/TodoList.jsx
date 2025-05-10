import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
import { todoItem } from '../Redux/Action/action';
import '../css for component/Todolist.css'
export default function TodoList() {
    const [input, setInput] = useState("");
    const [showInput, setShowInput] = useState([]);
    const [completeList, setCompleteList] = useState([])


    const dispatch = useDispatch();
    const comletecheck = (item, isCheck) => {
        if (isCheck) {
            // Remove from active list
            const updatedShowInput = showInput.filter((todo) => todo.id !== item.id);
            setShowInput(updatedShowInput);
    
            // Add to completed list
            const updatedCompleteList = [...completeList, { ...item, checked: true }];
            setCompleteList(updatedCompleteList);
    
            // Update localStorage
            localStorage.setItem('todo-Item', JSON.stringify(updatedShowInput));
            localStorage.setItem('work-done-item', JSON.stringify(updatedCompleteList));
        } else {
            // Remove from completed
            const updatedCompleteList = completeList.filter((todo) => todo.id !== item.id);
            setCompleteList(updatedCompleteList);
    
            // Add back to active
            const updatedShowInput = [...showInput, { ...item, checked: false }];
            setShowInput(updatedShowInput);
    
            // Update localStorage
            localStorage.setItem('todo-Item', JSON.stringify(updatedShowInput));
            localStorage.setItem('work-done-item', JSON.stringify(updatedCompleteList));
        }
    };
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return;
        const newTodo = {
            id: Date.now(), // unique id
            text: input,
            checked: false
        };
        dispatch(todoItem(input))
        const update = [...showInput, newTodo]
        setShowInput((pre) => [...pre, newTodo])
        localStorage.setItem('todo-Item', JSON.stringify(update))
        setInput('')
        console.log(showInput)
    }

    const handleDelete=(id)=>{
        const updatedList = completeList.filter(todo=>todo.id!==id)
        setCompleteList(updatedList)

        localStorage.setItem('work-done-item',JSON.stringify(updatedList))        
    }
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todo-Item'))
        if (saved) {
            setShowInput(saved)
        }
    },[])
    return (
        <div className='mainTodo'>
            <h1 className='heading'>Todo List</h1>
            <div>
                <div className='inputDiv'>
                    <input className="todoInput" type="text" name="todo name" id="todinput" onChange={handleChange} placeholder="Add Todo" value={input} />
                    <button className='todoButton btn btn-success' onClick={handleSubmit}>Add Todo</button>
                </div>
                <div>
                    {showInput.map((item) => (
                        <div key={item.id} className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-stary'>
                                <div>
                                    <input type="checkbox" checked={item.checked} className='me-4' onChange={(e) => comletecheck(item, e.target.checked)} />
                                </div>
                                <div >
                                    <li >{item.text}</li>
                                </div>
                            </div>
                            <div>
                                <p><i class="fa-solid fa-hourglass-half">Processing...</i></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1>Complete Work History</h1>
                {completeList.map((item, index) => (
                    <div key={item.id} className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-stary'>
                            <div>
                                <input type="checkbox" checked={item.checked} className='me-4' onChange={(e) => comletecheck(item, e.target.checked)} />
                            </div>
                            <div >
                                <li >{item.text}</li>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>handleDelete(item.id)} > Delete</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
