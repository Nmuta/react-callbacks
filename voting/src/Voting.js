import React,{Component} from 'react';
import './App.css';
import Language from "./components/Language";

class Voting extends Component{
	constructor(props){
		super(props);
		this.state = {languages : ["Javascript", "Python", "Go", "Java", "Typescript", "Ruby", "Elixir"], counter: 0};
	}

	

	render(){
		return(
			<div>
			<h1> Welcome to the Voting app </h1>
			<div>Vote for a language</div>
			<div className="languages">
			{this.state.languages.map((lang) => 
				<Language language={lang}/>
				)}
			</div>
			</div>
		);
	}
}
export default Voting;