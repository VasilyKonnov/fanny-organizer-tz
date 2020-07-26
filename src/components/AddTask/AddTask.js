import React, { useState } from "react";
// import { useEffect } from "react";
import "./AddTask.css";


const AddTask = (props) => {
    const [taskTitle, setTaskTitle] = useState("");

    // useEffect(() => {
    // })[taskTitle];

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleInputChange = (event) => {
        setTaskTitle(event.target.value);
    }
    const handleClick = () => {
        props.addTodo({ userId: props.userId, id: props.id, title: taskTitle, completed: false });
        console.log("add Task props - ", props)
        setTaskTitle("");
    }

    return (
        <React.Fragment>
            <form className="bg-light addTaskForm" onSubmit={handleSubmit}>
                <h3 className="mb25">Добавить задачу</h3>
                <p className="fz10">Если добавить несколько задач, затем хотябы одну отредактировать и удалить, то
                удаляться задачи загруженные по умолчанию.
                <br /><br />Это связано с тем что в этом приложении используется тестовый API который только имитирует добавление нового эллемента в базу данных.
                </p>
                <input
                    onChange={handleInputChange}
                    className="addTaskForm-input"
                    placeholder={"Введите название задачи"}
                    value={taskTitle}
                />
                <button onClick={handleClick} disabled={taskTitle.length ? false : true} className="btn btn-success">Добавить задачу</button>
            </form>
        </React.Fragment >
    )
}
export default AddTask;