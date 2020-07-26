import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        < div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={"profile/" + props.user.id} >
                        {props.user.username}
                    </Link>
                </h5>
                <ul>
                    <li>Email: {props.user.email}</li>
                    <li>Адрес: Город {props.user.address.city}, улица {props.user.address.street} {props.user.address.suite} индекс {props.user.address.zipcode}
                    </li>
                    <li>Компания: {props.user.company.name}</li>
                </ul>
            </div>
        </ div >
    )

}


export default Card;