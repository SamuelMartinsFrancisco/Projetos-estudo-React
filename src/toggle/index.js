import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOff: false };
    }

    render() {
        return (
            <Button value={this.state.isOff === false ? 'On' : 'Off'} 
                onClick={() => {
                    this.setState({isOff: !this.state.isOff})
            }}/>
        )
    }
}

function Button(props) {
    return (
        <button onClick={props.onClick}>{props.value}</button>
    )
}

export default Toggle;