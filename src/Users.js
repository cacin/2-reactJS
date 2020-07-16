import React, { Component } from 'react';
import './Users.css';
import UsersList from './UsersList';


class Users extends Component{

    constructor(props){
        super(props);

        this.state={
            users: []
        }
    }

    addUser = (event) => {
        event.preventDefault();
        
        let userAdd = {
            id: Date.now(),
            name: this._inputName.value
        }

        this.setState((state) => {
            return({
                users: state.users.concat(userAdd)

            });
        });

        this._inputName.value='';
        
    }

    removeUser = (user) => {
        
        this.setState((state) => {
            return({
                users: state.users.filter((item) => {
                    return(item.id !== user)
                })
            });
        })
    }

    render(){
        return(
            <div className="user-main">
                <form action="" onSubmit={this.addUser}>
                    <input ref={(element)=>{this._inputName = element}} type="text" placeholder="Enter name"/>
                    <button type="submit">Add user</button>
                </form>

               <UsersList usersName={this.state.users} removeUserMethod={this.removeUser}/>
            </div>
        );
    }
}

export default Users;