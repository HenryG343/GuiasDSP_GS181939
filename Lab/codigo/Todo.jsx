import React from 'react'
const Todo = ({todo,index,deleteTodo}) => {
    return (
        <>
        todos.map((value, index) => (
            <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
        ))

            <div className='list'>
                <h3>{todo}</h3>
                <button className='btn-delete' onClick={()=>deleteTodo(index)}>x</button>
            </div>
        </>
    )
}