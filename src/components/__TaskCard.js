import React, { useContext } from "react";
// import { ProfileContext } from "../context/Profile/profileContext";

const TaskCard = (props) => {


    if (props) {
        console.log(props);
    } else {
        console.log("Props не загружен");
    }
    // useEffect(() => {
    //     console.log("12312")
    // }, [])
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         edit: false,
    //         todo: props.todo
    //     };
    //     this.titleChange = this.titleChange.bind(this);
    // }

    // const { edit, toggleEdit } = useContext(ProfileContext)
    const todo = props.todo;
    console.log(todo);

    // toggleEdit = () => {
    //     if (this.edit) {
    //         this.props.updateTodo({ ...this.state.todo });
    //     }
    //     this.setState({
    //         edit: !this.state.edit
    //     });
    // }

    // titleChange(e) {
    //     console.log(e)
    //     this.setState((state) => ({
    //         todo: { title: e.target.value, ...state.todo }
    //     }))
    // }

    const { title } = this.props.todo;

    return (
        < div className="card mb-4" >
            <div className="card-body">
                {/* {JSON.stringify(this.props)} */}
                <h5 className="card-title">
                    <input value={title} onChange={this.titleChange} />
                </h5>

                <p className={this.props.todo.completed ? "text-success" : "text-danger"}>
                    {this.props.todo.completed ? "Сделано" : "Не сделано"}
                </p>

                <button className="btn btn-primary mr-2" onClick={toggleEdit}> {edit ? 'Сохранить' : "Редактировать"}</button>
                <button className="btn btn-danger" onClick={this.removeTask}>Удалить</button>
            </div>

        </div >
    )
}

export default TaskCard;