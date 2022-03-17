import React from 'react';
import './GamePage.css';

class GamePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentQuestionIndex: 0,
            questions: this.props.questions
        }
    }

    render() {
        return (
            <div id="game-page">
                <div id="score-values">
                    {`Score: ${this.calculateCurrentScore()} / ${this.calculateTotalScore()}`}
                </div>
                <div id="prompt-container">
                    <div id="current-image-container">
                        <img id="current-image" src={this.state.questions[this.state.currentQuestionIndex].imageSource} />
                    </div>
                    <div id="phrase-container">
                        <div className='phrase'>{this.state.questions[this.state.currentQuestionIndex].phrase[0]}</div>
                        <div className='phrase'>{this.state.questions[this.state.currentQuestionIndex].phrase[1]}</div>
                        <div className='phrase'>{this.state.questions[this.state.currentQuestionIndex].phrase[2]}</div>
                    </div>
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
                <div id="buttons-container">
                    <img className='nav-button icon-button' id='back-button' src={"back.png"} onClick={this.prevQuestion.bind(this)} />
                    <img className='nav-button icon-button' id='next-button' src={"next.png"} onClick={this.nextQuestion.bind(this)} />
                </div>
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
        return this.state.questions.length * 3;
    }

    calculateCurrentScore() {
        let total = 0;

        this.state.questions.forEach(q => {
            total = total + q.scoreCount;
        });

        return total
    }

    scoreCorrect() {
        let updatedQuestions = this.state.questions;
        const newCount = updatedQuestions[this.state.currentQuestionIndex].scoreCount + 1;

        if (newCount <= 3) {
            updatedQuestions[this.state.currentQuestionIndex].scoreCount = newCount;

            this.setState({
                questions: updatedQuestions
            })
        }
    }

    scoreWrong() {
        let updatedQuestions = this.state.questions;
        const newCount = updatedQuestions[this.state.currentQuestionIndex].scoreCount - 1;

        if (newCount >= 0) {
            updatedQuestions[this.state.currentQuestionIndex].scoreCount = newCount;

            this.setState({
                questions: updatedQuestions
            })
        }
    }
}

export default GamePage;