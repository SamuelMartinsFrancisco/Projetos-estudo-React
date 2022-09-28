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
        };
    }

    handleOperation(operation) {
        let result = this.state.values[0] + this.state.values[1];
        let exercise = `${this.state.values[0]} + ${this.state.values[1]}`;
    
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
                                            result: state.values[0] / state.values[1], 
                                            operation: '÷' }));
                break;
        }
    }

    handleNewExercise() {
        let random = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
        this.setState({values: random});
        this.handleOperation(this.state.operation);
    }

    render() {
        return (
            <>
                <div className="content">
                    <div className="result-and-operations">
                        <div className="exercise-result">
                            <span> {this.state.result} </span>
                            <span> {this.state.exercise} </span>
                        </div>

                        <div className="operations">
                            <Operation name="+" onClick={() => this.handleOperation('+')} />
                            <Operation name="-" onClick={() => this.handleOperation('-')} />
                            <Operation name="x" onClick={() => this.handleOperation('x')} />
                            <Operation name="÷" onClick={() => this.handleOperation('÷')} />
                        </div>
                    </div>

                    <NewExerciseOrResult name="Novo exercício" onClick={() => this.handleNewExercise()} />

                    <div className="difficulties">
                        <Difficulty name="fácil" onClick={() => { }} />
                        <Difficulty name="médio" onClick={() => { }} />
                        <Difficulty name="difícil" onClick={() => { }} />
                    </div>
                </div>
            </>
        );
    }
}

function Operation(props) {
    return (
        <button className="operation-button" onClick={props.onClick}>
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
        <button className="difficulty-button" onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default ExercisesGenerator;