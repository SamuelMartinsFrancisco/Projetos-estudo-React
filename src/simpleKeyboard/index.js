import React from 'react';
import './index.css';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            digits: '',
            keyboard: ['1','2','3','4','5','6','7','8','9','0','<-',
                       'q','w','e','r','t','y','u','i','o','p',
                       'a','s','d','f','g','h','j','k','l','ç',
                       'z','x','c','v','b','n','m',',','.',
                       'space']
        };
    }

    handleKey(i) {
        let whatHappens = undefined; 

        if(i === 40) { 
            whatHappens = this.state.digits + ' ';
        }
        else if(i === 10) {
            let digits = this.state.digits.split('');
                digits.pop();
            whatHappens = digits.join('');
        }
        else {
            whatHappens = this.state.digits + this.state.keyboard[i];
        }

        return this.setState({digits: whatHappens})
    }

    renderKeys(i) {
        return (
            <Key value={this.state.keyboard[i]} onClick={() => this.handleKey(i)} />
        )
    } 

    render() {
        return (
            <>
                <div className="digits">{this.state.digits}</div>
                <div className="keyboard">
                    <div className="row">
                        {this.renderKeys(0)}
                        {this.renderKeys(1)}
                        {this.renderKeys(2)}
                        {this.renderKeys(3)}
                        {this.renderKeys(4)}
                        {this.renderKeys(5)}
                        {this.renderKeys(6)}
                        {this.renderKeys(7)}
                        {this.renderKeys(8)}
                        {this.renderKeys(9)}
                        {this.renderKeys(10)}
                    </div>
                    <div className="row">
                        {this.renderKeys(11)}
                        {this.renderKeys(12)}
                        {this.renderKeys(13)}
                        {this.renderKeys(14)}
                        {this.renderKeys(15)}
                        {this.renderKeys(16)}
                        {this.renderKeys(17)}
                        {this.renderKeys(18)}
                        {this.renderKeys(19)}
                        {this.renderKeys(20)}
                    </div>
                    <div className="row">
                        {this.renderKeys(21)}
                        {this.renderKeys(22)}
                        {this.renderKeys(23)}
                        {this.renderKeys(24)}
                        {this.renderKeys(25)}
                        {this.renderKeys(26)}
                        {this.renderKeys(27)}
                        {this.renderKeys(28)}
                        {this.renderKeys(29)}
                        {this.renderKeys(30)}
                    </div>
                    <div className="row">
                        {this.renderKeys(31)}
                        {this.renderKeys(32)}
                        {this.renderKeys(33)}
                        {this.renderKeys(34)}
                        {this.renderKeys(35)}
                        {this.renderKeys(36)}
                        {this.renderKeys(37)}
                        {this.renderKeys(38)}
                        {this.renderKeys(39)}
                    </div>
                    <div className="row">
                        {this.renderKeys(40)}
                    </div>
                </div>
            </>
        );
    }
}

function Key(props) {
    return (
        <button className="key" onClick={props.onClick}>{props.value}</button>
    )
}

export default Keyboard;