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
        if (this.state.showResult === true) {
            this.setState((state) => ({values: random, showResult: !state.showResult}));
        } else {
            this.setState((state) => ({showResult: !state.showResult}));
        }
        this.handleOperation(this.state.operation);
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
                                       isChosen={ this.state.operation === '+' ? ' chosen' : '' } 
                                       onClick={() => this.handleOperation('+')} />
                            <Operation name="-" 
                                       isChosen={ this.state.operation === '-' ? ' chosen' : '' } 
                                       onClick={() => this.handleOperation('-')} />
                            <Operation name="x"
                                       isChosen={ this.state.operation === 'x' ? ' chosen' : '' }  
                                       onClick={() => this.handleOperation('x')} />
                            <Operation name="÷"
                                       isChosen={ this.state.operation === '÷' ? ' chosen' : '' }  
                                       onClick={() => this.handleOperation('÷')} />
                        </div>
                    </div>

                    <NewExerciseOrResult name={this.state.showResult === true ? 'Novo exercício' : 'Mostrar resposta'}
                                         onClick={() => this.handleNewExercise()} />

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
        <button className={"operation-button" + props.isChosen} onClick={props.onClick}>
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