import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    // Initialize state for Users
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }

    // Call rest api and add data to state
    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    // Render User table to screen
    render() {
        return (
            <div>
                <h1 className = "text-center">User List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> User Id</td>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email Address</td>
                            <td> User Phone Number</td> 
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            this.state.users.map(
                                users => 
                                <tr key = {users.id}>
                                    <td> {users.id}</td>
                                    <td> {users.firstName}</td>
                                    <td> {users.lastName}</td>
                                    <td> {users.email}</td>
                                    <td> {users.phoneNumber}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default UserComponent 

