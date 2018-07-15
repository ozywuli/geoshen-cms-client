
import React, { Component } from 'react';
import UserForm from '../../Components/UserForm/UserForm';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <UserForm />
            </div>
        )
    }
}

export default Home;