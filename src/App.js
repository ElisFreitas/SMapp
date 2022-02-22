import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import CategoriesPage from './CategoriesPage';

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
        {(this.state.currentPage === "LoginPage") && <LoginPage handler={this.changePage.bind(this)}/>}
        {(this.state.currentPage === "CategoriesPage") && <CategoriesPage handler={this.changePage.bind(this)}/>}
      </div>
    );
  }

  changePage(page) { 
    this.setState({
      currentPage: page
    });
  }
}

export default App;
