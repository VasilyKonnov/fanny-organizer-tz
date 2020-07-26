import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../context/Profile/profileContext";
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask/AddTask";

const Profile = ({ match }) => {

    const id = match.params.id;

    const { fetchTodos, fetchUser, addTodo, deleteTodo, updateTodo, todos, user, loading
    } = useContext(ProfileContext)

    useEffect(() => {
        fetchUser(id);
        fetchTodos(id);
    }, [])

    // useEffect(() => {
    //     renderTodos(todos);
    // }, [renderTodos(todos)])

    const renderTodos = (todos) => {
        return todos.map(todo => <TaskCard deleteTodo={deleteTodo} updateTodo={updateTodo} todo={todo} key={todo.id} />)
    }
    const completed = todos.filter((t) => t.completed).length;
    const notCompleted = todos.filter((t) => !t.completed).length;

    if (loading || todos.length === 0) {
        return <p className="text-center">Eсли долго нет ответа:<br /><br />
        - Проверьте соединение с интернетом <br />
        - Проверьте корректность адреса пользователя! <br /><br />Loading...</p>
    }

    const { username } = user;
    // console.log(user);

    return (
        <React.Fragment>
            <h1 className="mb-4">{username}</h1>
            <p>
                <b>
                    <span className="text-success">Выполненно {completed} </span>/
                    <span className="text-danger"> Не выполнено {notCompleted}</span>
                </b>
            </p>
            <hr />
            <AddTask addTodo={addTodo} userId={user.id} />
            <hr />
            {renderTodos(todos)}
        </React.Fragment>
    )
}

export default Profile;