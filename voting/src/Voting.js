import React,{Component} from 'react';
import './App.css';
import Language from "./components/Language";

class Voting extends Component{
	constructor(props){
		super(props);
		this.state = 
			{languages : ["Javascript", "Python", "Go", "Java", "Typescript", "Ruby", "Elixir"], 
			counter: 0,
			lastVote: "none"
			};
	}

	masterIncremeter = () => this.setState({counter: this.state.counter + 1})

	updateLastVoted = (param) => this.setState({lastVote: param})

	

	render(){
		return(
			<div>
			<h1> Welcome to the Voting app </h1>
			<div>Vote for a language</div>
			<div>Total count: {this.state.counter}</div>
			<div>Last voted: {this.state.lastVote}</div>
			<div className="languages">
			{this.state.languages.map((lang) => 
				<Language 
					language={lang}
					masterCounter = {this.masterIncremeter}
					updateLastVoted = {this.updateLastVoted}
				/>
				)}
			</div>
			</div>
		);
	}
}
export default Voting;


/// this is a useless comment. 