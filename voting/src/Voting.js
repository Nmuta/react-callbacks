import React,{Component} from 'react';
import './App.css';
import cities from './components/cities';

class Voting extends Component{
	constructor(props){
		super(props);
		 
		this.state={currentCity: "Denver"}
	}

	updateTimeZoneForCity = (e) => {
        let currentZone = e.target.value;
		this.props.updateTimeZone(currentZone);
	}

	render(){
		return(
			<div className="dropdown"> 
			    <div>
				  Welcome to the Time app
				</div> 
				<select name="timezones" id="timezones" onChange={this.updateTimeZoneForCity}>
					{cities.map((city,key) =>{ 
					   return (<option key={key} value={city.zone}>{city.name}</option>)
					  } 
					)}
				</select>	
			</div>

		);
	}
}
export default Voting;