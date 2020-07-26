import React from "react";

const Tasks = (props) => (
    <div className="card">
        <div className="card-body">
            <p>{props.title}</p>
            <li>
                <button className="btn btn-primary" onClick={props.changeTask}>Редактировать</button>
                <button className="btn btn-danger" onClick={props.removeTask}>Удалить</button>
            </li>
            </ul>
    </div>
    </div >
)

export default Tasks;