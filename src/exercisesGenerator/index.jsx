import React from 'react';
import './css/styles.css';

class ExercisesGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exercise: '50 + 5',
            result: '55',
            showResult: false,
        };
    }

    render() {
        return (
            <>
                <div className="content">
                    <div className="result-and-operations">
                        <div className="operations">
                            <Operation name="+" onClick={() => {}}/>
                            <Operation name="-" onClick={() => {}}/>
                            <Operation name="x" onClick={() => {}}/>
                            <Operation name="÷" onClick={() => {}}/>
                        </div>
                        <div className="exercise-result">
                            <span>{this.state.result}</span>
                            <span>{this.state.exercise}</span>
                        </div>
                    </div>
                    <NewExerciseOrResult name="Novo exercício" onClick={() => {}}/>
                    <div className="difficulties">
                        <Difficulty name="fácil" onClick={() => {}}/>
                        <Difficulty name="médio" onClick={() => {}}/>
                        <Difficulty name="difícil" onClick={() => {}}/>
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
    return(
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