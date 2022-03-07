import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import CategoriesPage from './CategoriesPage';
import GamePage from './GamePage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "LoginPage"
    };
  }

  render() {
    return (
      <div className="App">        
        {(this.state.currentPage != "LoginPage") && <button onClick={this.goBack.bind(this)}>{"Back"}</button> }
        {(this.state.currentPage === "LoginPage") && <LoginPage handler={this.changePage.bind(this)}/>}
        {(this.state.currentPage === "CategoriesPage") && <CategoriesPage handler={this.changePage.bind(this)}/>}
        {(this.state.currentPage === "GamePage") && <GamePage handler={this.changePage.bind(this)}/>}
      </div>
    );
  }

  changePage(page) { 
    this.setState({
      currentPage: page
    });
  }

  goBack() {
    if(this.state.currentPage === "CategoriesPage") {
      this.setState({
        currentPage: "LoginPage"
      })
    } else if(this.state.currentPage === "GamePage") {
      this.setState({
        currentPage: "CategoriesPage"
      })
    }
  }
}

export default App;
