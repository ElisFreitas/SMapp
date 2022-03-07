import React from 'react';
import './GamePage.css';

const questions = [
        { imageSource: "ice-cream.jpeg", points: 50,  audioSource: null },
        { imageSource: "burger.jpg", points: 60,  audioSource: null },
        { imageSource: "restroom.jpg", points: 60,  audioSource: null }
    ];    

class GamePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentQuestionIndex: 0
        }
    }

    render() {
        return (
            <div id="game-page">
                <div id="score-bar"></div>
                <img id="current-image" src={questions[this.state.currentQuestionIndex].imageSource}/>
                <div id="current-recording"></div>

                <img className='nav-button' id='next-button' src={"next.png"} onClick={this.nextQuestion.bind(this)}/>
                <img className='nav-button' id='back-button' src={"back.png"} onClick={this.prevQuestion.bind(this)}/>

                <div id="score-buttons-container"></div>
            </div>
        );
    }

    nextQuestion() {        
        let newIndex = this.state.currentQuestionIndex + 1;

        if(newIndex === questions.length) {
            newIndex = 0;
        }

        this.setState({
            currentQuestionIndex: newIndex
        });
    }

    prevQuestion() {
        let newIndex = this.state.currentQuestionIndex - 1;
        if(newIndex === -1) { 
            newIndex = questions.length - 1;
        }

        this.setState({
            currentQuestionIndex: newIndex
        });
        
    }
}

export default GamePage;