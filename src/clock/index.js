import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Bom dia, tarde, noite!</h1>
                <h2>O horário é {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;