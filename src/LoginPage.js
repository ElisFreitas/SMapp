import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isInfoOpen: false
        }
    }

    render() {
        return (<div id='login-page'>
            <h1> {"Elis's app"}</h1>
            <ul id="users-list">
                <li className="user-name" onClick={this.openCategories.bind(this)}>{"Marina"}</li>
                <li className="user-name" onClick={this.openCategories.bind(this)}>{"Isadora"}</li>
                <li className="user-name" onClick={this.openCategories.bind(this)}>{"Eduardo"}</li>
            </ul>

            <button id="information-button" onClick={this.openInfo.bind(this)}>{"Info"}</button>

            <div>
                {this.state.isInfoOpen && (
                    <div id="info-box">
                        <div id="info-text">{"Elis's app is an educational tool helping children of age 7 to 11 years to practice speaking in different situations. Add the name of the child. You can add up to 5 users. Choose the name of the child by clicking on it and press the start. Choose one of the topics you would like to work with. On the next page, you will find X number of different photos and three suggested phrases. Each phrase has a different level of difficulty. You could practice at home or in a more challenging environment. According to the level of complexity of a certain situation, you could decide to give more than one score for one managed phrase. The points are given by you manually and you can create your system how are you going to rate each achievement of the child. Use the record button to record the voice of the child saying a phrase. You could listen to the record at any time. This could be very helpful in a stressful situation, for example in a restaurant. You can delete and record again. On the right top, you will always see the scoreline which has 4 different levels. Once the child reaches each of the new levels, a little popup animation will greet them. This achievement could have a little expression in real life if you agree on something with the child. For example a visit to a restaurant and enjoying their favorite meal. Once you are done, simply press the save and exit button, and the new score will be saved."} </div>
                        <button id="close-information" onClick={this.closeInfo.bind(this)}>{"Close"}</button>
                    </div>
                )}
            </div>
        </div>
        );
    }

    openCategories() {
        this.props.handler("GamePage");
    }

    openInfo() {
        this.setState({ isInfoOpen: true });
    }

    closeInfo() {
        this.setState({ isInfoOpen: false })
    }

}

export default LoginPage