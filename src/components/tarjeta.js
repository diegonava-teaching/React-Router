import React from "react";

function Tarjeta(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h5 src={props}>{props.title}</h5>
                <h6 src={props}>{props.id}</h6>
                <p src={props}>{props.body}</p>
            </div>
        </div>
    );
}

export default Tarjeta;
