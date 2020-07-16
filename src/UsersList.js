import React from 'react';
import './UsersList.css';

function UsersList(props){
    
    let usersList = props.usersName;
    let usersLiElement = usersList.map((user) => {
    return <li key={user.id}>{user.name} <span onClick={()=>props.removeUserMethod(user.id)}>X</span></li>;
    })

    return(
        <ul>
            {usersLiElement}
        </ul>
    );
}

export default UsersList;