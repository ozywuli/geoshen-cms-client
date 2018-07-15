import React, { Component } from 'react';
import axios from 'axios';
import './_UserForm.scss';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:5000/',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        })
    }

    handleInputChange(propertyName, event) {
        let user = this.state.user;
        user[propertyName] = event.target.value;

        this.setState(user);
    }

    render() {
        return (
            <div className="user-form">
                <form 
                    className="form"
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <div className="form-row">
                        <label 
                            htmlFor="username" 
                            className="form-label"
                        >Username</label>
                        <input 
                            type="text" 
                            placeholder="username"
                            value={this.state.user.username}
                            id="username" 
                            className="form-input"
                            onChange={this.handleInputChange.bind(this, 'username')}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            placeholder="password"
                            value={this.state.user.password}
                            id="password" 
                            className="form-label"
                            onChange={this.handleInputChange.bind(this, 'password')}
                        />
                    </div>
                    <div className="form-row">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserForm;