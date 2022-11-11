import React from 'react';
import './css/styles.css';

class ExercisesGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [550, 5],
            exercise: '550 + 5',
            result: '555',
            operation: '+',
            showResult: false,
            difficulty: 20,
        };
    }

    handleOperation(operation) {
        switch (operation) {
            case '+':
                this.setState((state) => ({ exercise: `${state.values[0]} + ${state.values[1]}`, 
                                            result: state.values[0] + state.values[1], 
                                            operation: '+' }));
                break;
            case '-':
                this.setState((state) => ({ exercise: `${state.values[0]} - ${state.values[1]}`, 
                                            result: state.values[0] - state.values[1], 
                                            operation: '-' }));
                break;
            case 'x':
                this.setState((state) => ({ exercise: `${state.values[0]} x ${state.values[1]}`, 
                                            result: state.values[0] * state.values[1], 
                                            operation: 'x' }));
                break;
            case '÷':
                this.setState((state) => ({ exercise: `${state.values[0]} ÷ ${state.values[1]}`, 
                                            result: ((state.values[0] / state.values[1]) % 2) === 0 ? 
                                                                            (state.values[0] / state.values[1]) : 
                                                                            (state.values[0] / state.values[1]).toFixed(2).replace('.', ','), 
                                            operation: '÷' }));
                break;
        }
    }

    handleNewExercise() {
        let random = [Math.floor(Math.random() * 500), Math.floor(Math.random() * this.state.difficulty)];
        if (this.state.showResult === true) {
            this.setState((state) => ({values: random, showResult: !state.showResult}));
        } else {
            this.setState((state) => ({showResult: !state.showResult}));
        }
        this.handleOperation(this.state.operation);
    }

    handleDifficulty(difficulty) {
        this.setState({difficulty: difficulty});
    }

    render() {
        let showResult = this.state.showResult === true ? ' show-result' : '';
        let hideResult = this.state.showResult === false ? 'hide-result' : '';
        return (
            <>
                <div className="content">
                    <div className="result-and-operations">
                        <div className={"exercise-result" + showResult}>
                            <span> {this.state.exercise} </span>
                            <span className={hideResult}> {this.state.result} </span>
                        </div>

                        <div className="operations">
                            <Operation name="+" 
                                       chosenOperation={ this.state.operation === '+' ? ' chosen' : '' } 
                                       onClick={() => this.handleOperation('+')} />
                            <Operation name="-" 
                                       chosenOperation={ this.state.operation === '-' ? ' chosen' : '' } 
                                       onClick={() => this.handleOperation('-')} />
                            <Operation name="x"
                                       chosenOperation={ this.state.operation === 'x' ? ' chosen' : '' }  
                                       onClick={() => this.handleOperation('x')} />
                            <Operation name="÷"
                                       chosenOperation={ this.state.operation === '÷' ? ' chosen' : '' }  
                                       onClick={() => this.handleOperation('÷')} />
                        </div>
                    </div>

                    <NewExerciseOrResult name={this.state.showResult === true ? 'Novo Exercício' : 'Resposta'}
                                         onClick={() => this.handleNewExercise()} />

                    <div className="difficulties">
                        <Difficulty name="fácil"
                                    chosenDifficulty={ this.state.difficulty === 20 ? ' chosen' : '' } 
                                    onClick={() => this.handleDifficulty(20)} />
                        <Difficulty name="médio" 
                                    chosenDifficulty={ this.state.difficulty === 200 ? ' chosen' : '' }
                                    onClick={() => this.handleDifficulty(200)} />
                        <Difficulty name="difícil" 
                                    chosenDifficulty={ this.state.difficulty === 500 ? ' chosen' : '' }
                                    onClick={() => this.handleDifficulty(500)} />
                    </div>
                </div>
            </>
        );
    }
}

function Operation(props) {
    return (
        <button className={"operation-button" + props.chosenOperation} onClick={props.onClick}>
            {props.name}
        </button>
    );
}

function NewExerciseOrResult(props) {
    return (
        <button className="exercise-button" onClick={props.onClick}>
            {props.name}
        </button>
    );
}

function Difficulty(props) {
    return (
        <button className={"difficulty-button" + props.chosenDifficulty} onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default ExercisesGenerator;