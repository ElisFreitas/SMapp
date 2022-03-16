import React from 'react';
import './GamePage.css';

class GamePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentQuestionIndex: 0,
            questions: [
                { imageSource: "ice-cream.jpeg", points: 50, audioSource: null, isCorrect: false },
                { imageSource: "burger.jpg", points: 60, audioSource: null, isCorrect: false },
                { imageSource: "restroom.jpg", points: 60, audioSource: null, isCorrect: false },
            ]
        }
    }

    render() {
        return (
            <div id="game-page">
                <div id="score-values">
                    {`Score: ${this.calculateCurrentScore()} / ${this.calculateTotalScore()}`}
                </div>
                <div id="prompt-container">
                    <img id="current-image" src={this.state.questions[this.state.currentQuestionIndex].imageSource} />
                </div>
                <div id="points-container">
                    <div id="score-bar-container">
                        <div id="score-bar" style={{ height: this.calculateCurrentScore() / this.calculateTotalScore() * 100 + "%" }} />
                    </div>
                    <div id="score-buttons-container">
                        <img className='score-button icon-button' id="correct-button" src='correct.png' onClick={this.scoreCorrect.bind(this)} />
                        <img className='score-button icon-button' id="wrong-button" src='wrong.png' onClick={this.scoreWrong.bind(this)} />
                    </div>
                </div>
                <img className='nav-button icon-button' id='back-button' src={"back.png"} onClick={this.prevQuestion.bind(this)} />
                <img className='nav-button icon-button' id='next-button' src={"next.png"} onClick={this.nextQuestion.bind(this)} />
            </div>
        );
    }

    nextQuestion() {
        let newIndex = this.state.currentQuestionIndex + 1;

        if (newIndex === this.state.questions.length) {
            newIndex = 0;
        }

        this.setState({
            currentQuestionIndex: newIndex
        });
    }

    prevQuestion() {
        let newIndex = this.state.currentQuestionIndex - 1;
        if (newIndex === -1) {
            newIndex = this.state.questions.length - 1;
        }

        this.setState({
            currentQuestionIndex: newIndex
        });

    }

    calculateTotalScore() {
        let total = 0;

        this.state.questions.forEach(q => {
            total = total + q.points;
        });

        return total
    }

    calculateCurrentScore() {
        let total = 0;

        this.state.questions.forEach(q => {
            if (q.isCorrect) {
                total = total + q.points;
            }
        });

        return total
    }

    scoreCorrect() {
        let updatedQuestions = this.state.questions;
        updatedQuestions[this.state.currentQuestionIndex].isCorrect = true;

        this.setState({
            questions: updatedQuestions
        })
    }

    scoreWrong() {
        let updatedQuestions = this.state.questions;
        updatedQuestions[this.state.currentQuestionIndex].isCorrect = false;

        this.setState({
            questions: updatedQuestions
        })
    }
}

export default GamePage;