import logo from './logo.svg';
import './App.css';
import Voting from './Voting'
import { Component } from 'react';


 
class App extends Component {

  constructor(props){
    super(props);
    this.state= {currentTime: "no time set yet", timezone: "UTC", city: "no city yet"}
  }

  componentDidMount(){
    this.timeInitializer();
    this.timeUpdater();
  }

  timeInitializer(){
    let datenow = new Date();
    let formatted_date = datenow.toLocaleTimeString("en-US", {timeZone: this.state.timezone})
    this.setState({currentTime: formatted_date})
  }

  timeUpdater = () => {
    let interval = setInterval(()=> {
      this.timeInitializer(this.state.timezone);
    }, 1000);
  }

  updateTimeZone = (val) => {
    this.setState({timezone: val});
  }



  render(){
    return (
      <div className="App">
         <div className="header">
          <div className="timebox">{this.state.currentTime} 
          </div>
         </div>
         <div className="selector-box-container">
           <div className="selector-box">
            <Voting updateTimeZone={this.updateTimeZone} />
           </div>
         </div>
      </div>
    );
  }
}

export default App;
