import React, { useState } from 'react';
// import "./Todo.css";

export default function Todo() {
    const [todoInput, setTodoInput] = useState('');
    const [todoInputList, setTodoInputList] = useState([]);
    const [editStatus, setEditStatus] = useState(true);
    // const [hasTodo, setTodoStatus] = useState(false);

    const handleTodoInput = (event) => {
        setTodoInput(event.target.value)
    }

    const addNewTodo = () => {
        todoInputList.push({ content: todoInput, date: new Date().toUTCString() })
        setTodoInputList([...todoInputList]);
        setTodoInput('');
    }

    const handleRemoveTodo = (index) => {
        console.log("Index is", index)
        todoInputList.splice(index, 1);
        setTodoInputList([...todoInputList]);
    }

    const handleEditTodo = (index) => {
        setEditStatus(!editStatus);
        console.log("Edit status us", editStatus)
    }

    const updateTodoValue = (index, event) => {
        todoInputList[index].content = event.target.value;
        todoInputList[index].date = new Date().toUTCString();
        setTodoInputList([...todoInputList]);

    }

    return (
        <>
            <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
                <div className="row m-1 p-4">
                    <div className="col">
                        <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                            <u>Add Todo-s</u>
                        </div>
                    </div>
                </div>
                <div className="row m-1 p-3">
                    <div className="col col-11 mx-auto">
                        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                            <div className="col">
                                <input className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .." value={todoInput} onChange={handleTodoInput} />
                            </div>
                            <div className="col-auto px-0 mx-0 mr-2">
                                <button type="button" className="btn btn-primary" onClick={addNewTodo}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 mx-4 border-black-25 border-bottom"></div>

                <div className="row m-1 p-3 px-5 justify-content-center">
                    <div className="col-auto d-flex align-items-center px-1 pr-3">
                        <h3>My Todos</h3>
                    </div>
                </div>
                {/* {setTodoInputList.length > 0 && <div>No Todos yet</div>} */}
                <div className="row mx-1 px-5 pb-3 w-80">
                    <div className="col mx-auto">
                        {todoInputList.length == 0 ? <div>Not Todos Yet</div> : todoInputList.map((todo, index) => <div className="row px-3 align-items-center todo-item rounded" key={index}>
                            <div className="col-auto m-1 p-0 d-flex align-items-center">
                                <i className="fa fa-trash-o text-danger btn fa-lg" onClick={() => handleRemoveTodo(index)} value={index}></i>
                            </div>
                            <div className="col-auto mt-1 p-0 d-flex align-items-center">
                                <i className="fa fa-edit text-danger btn fa-lg" onClick={() => handleEditTodo(index)} ></i>
                            </div>
                            <div className="col-auto m-1 p-0 d-flex align-items-center">
                            </div>
                            <div className="col px-1 m-1 d-flex align-items-center">
                                <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readOnly={editStatus} value={todo.content} title="Buy groceries for next week" onChange={(event) => updateTodoValue(index, event)} />

                            </div>
                            <div className="col-auto m-1 p-0 todo-actions">
                                <div className="row todo-created-info">
                                    <div className="col-auto d-flex align-items-center pr-2">
                                        <label className="date-label my-2 text-black-50">{todo.date}</label>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}
