import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isInfoOpen: false,
            userName: null
        }
    }

    render() {
        return <div id="login-page">
            <div id="login-blurb" className='constant-width'> {"Who's playing today?"}</div>
            <input id="user-name-input" className='rounded-edges medium-font' onChange={this.updateName.bind(this)} />
            <button id="continue-button" className='rounded-edges medium-font' onClick={this.openCategories.bind(this)} disabled={!this.state.userName}>
                {"Let's play!"}
            </button>
            <button id="continue-button" className='rounded-edges medium-font' onClick={this.openCategories.bind(this)} disabled={!this.state.userName}>
                {"Let's play!"}
            </button>
        </div>

    }

    openCategories() {
        this.props.setUser(this.state.userName);
        this.props.handler("CategoriesPage");
    }

    updateName(event) {
        this.setState({ userName: event.target.value })
    }

}

export default LoginPage