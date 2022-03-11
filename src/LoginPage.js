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
        return (<div>
            <div id="login-header">
                <div id="login-title">{"Unmute"}</div>
                <div id="info-icon-outline" onClick={this.openInfo.bind(this)}>
                    <div id="info-icon-text">
                        {"Info"}
                    </div>
                </div>
            </div>
            <div id='login-page'>
                <div id="login-blurb"> {"Who's playing today?"}</div>
                <input id="user-name-input" onChange={this.updateName.bind(this)}/>
                <button id="continue-button" onClick={this.openCategories.bind(this)} disabled={!this.state.userName}>
                    {"Start"}
                </button>
                <div>
                    {this.state.isInfoOpen && (
                        <div id="info-box">
                            <div id="info-text">{"Elis's app is an educational tool helping children of age 7 to 11 years to practice speaking in different situations."}</div>
                            <button id="close-info-button" onClick={this.closeInfo.bind(this)}>{"Close"}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        );
    }

    openCategories() {
        this.props.handler("CategoriesPage");
    }

    openInfo() {
        this.setState({ isInfoOpen: true });
    }

    closeInfo() {
        this.setState({ isInfoOpen: false })
    }

    updateName(event) {
        this.setState({ userName: event.target.value })
    }

}

export default LoginPage