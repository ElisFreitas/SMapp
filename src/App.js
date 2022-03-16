import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import CategoriesPage from './CategoriesPage';
import GamePage from './GamePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "LoginPage",
      isInfoOpen: false,
      questions: null
    };
  }

  render() {
    return (
      <div className="App">
        <div id="header">
          <div id="header-title">{"Unmute"}</div>
          <div className="header-button-outline" onClick={this.openInfo.bind(this)}>
            <div className="header-button-text">
              {"Info"}
            </div>
          </div>
          {(this.state.currentPage !== "LoginPage") && <div className="header-button-outline" onClick={this.goBack.bind(this)}>
            <div className="header-button-text">
              {"Back"}
            </div>
          </div>}
        </div>
        {this.state.isInfoOpen && (
          <div id="info-box" className='rounded-edges'>
            <div id="info-text">{"Elis's app is an educational tool helping children of age 7 to 11 years to practice speaking in different situations."}</div>
            <button id="close-info-button" onClick={this.closeInfo.bind(this)}>{"Close"}</button>
          </div>
        )}
        {(this.state.currentPage === "LoginPage") && <LoginPage handler={this.changePage.bind(this)} setUser={this.setUser.bind(this)} />}
        {(this.state.currentPage === "CategoriesPage") && <CategoriesPage handler={this.changePage.bind(this)} userName={this.state.userName} />}
        {(this.state.currentPage === "GamePage") && <GamePage handler={this.changePage.bind(this)} questions={this.state.questions} />}
      </div>
    );
  }

  openInfo() {
    this.setState({ isInfoOpen: true });
  }

  closeInfo() {
    this.setState({ isInfoOpen: false })
  }

  setUser(user) {
    this.setState({
      userName: user
    });
  }

  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  goBack() {
    if (this.state.currentPage === "CategoriesPage") {
      this.setState({
        currentPage: "LoginPage"
      })
    } else if (this.state.currentPage === "GamePage") {
      this.setState({
        currentPage: "CategoriesPage"
      })
    }
  }
}

export default App;
