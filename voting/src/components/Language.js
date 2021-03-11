import React, { Component } from 'react';
class Language extends Component {

    constructor (props){
        super();
        this.state = {counter:0};
    }

    count = () => {
		this.setState({counter: this.state.counter + 1})
	}

    render(){
        return(
            <div className="language">
                <div className="voteCount">{this.state.counter}</div>
                {this.props.language}
                <button onClick={this.count}>vote ⚡</button>
            </div>
        )
    }
}

export default Language;
