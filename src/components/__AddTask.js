import React, { useState, useEffect } from "react";

const AddTask = (props) => {
    const [isFilledInput, setIsFilledInput] = useState(false);

    useEffect(() => {
        console.log("props", props)
    }, [])

    let value = "";

    function selfRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleInputChange = (e) => {
        console.log("После заполнения поля", setIsFilled);
        value = e.target.value;
    }
    const handleClick = (value) => {
        props.addTodo({ userId: props.userId, title: value, completed: false, });
        console.log("props", props)
        console.log(value)
        setIsFilledInput(true);
        console.log("После отправки данных", setIsFilled)
        value = "";
        console.log("Value ", value)
        setIsFilledInput(true);
        console.log("После обнуления поля ввода ", setIsFilled)
    }

    return (
        <React.Fragment>
            <form className="bg-light addTaskForm" onSubmit={handleSubmit}>
                <h3 className="mb25">Добавить задачу</h3>
                <p className="fz10">При удалении добавленных нескольки задач, первым кликом удаляются задачи которые по умолчанию загружаются, вторым кликом удаляется сама задача.
                <br /><br />Это связано с тем что в этом задании используется тестовый API который только имитирует добавление нового эллемента в базу данных.
                </p>
                <input
                    onChange={handleInputChange}
                    className="addTaskForm-input"
                    placeholder={"Название задачи"}
                    defaultValue={isFilledInput ? "" : value}
                />
                <button onClick={handleClick} className="btn btn-success">Добавить задачу</button>
            </form>
        </React.Fragment >
    )
}
export default AddTask;