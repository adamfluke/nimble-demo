import React, { Component } from 'react';
import face from './face.png';
import './App.css';

// Obviously, in a real app this wouldn't be here. For the sake of quick
// developement, I decided not to implement any type of data store, but
// would if this wasn't a demo app
var applicants_arr = [
    {
        "id": 1,
        "name": "Kathern Machado",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york",
        "highNeeds": "Low Needs"
    },
    {
        "id": 2,
        "name": "Nick Wenzel",
        "status": "Offer Sent",
        "applicationDate": "5/1/2017",
        "location": "new york",
        "lastAction": "Reviewed"
    },
    {
        "id": 3,
        "name": "Brittani Sobus",
        "status": "Hired",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 4,
        "name": "Donetta Brubaker",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 5,
        "name": "Coleman Harbert",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 6,
        "name": "Antoine Byerley",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 7,
        "name": "Penney Mccomas",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 8,
        "name": "Lakeshia Callaham",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 9,
        "name": "Efrain Dower",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 10,
        "name": "Porsche Marko",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"}
    ]

// I put all of the components in this file. In general, I would break these 
// out into their own file, and export/import explicitly. The value of doing
// so for the demo is nominal.
class InfoCard extends Component {
	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this); // the bind syntax isn't my favorite thing in life, but the quickest way
	  }

	handleClick() {
		if (this.props.setFocus){ // allows the InfoCard to be a bit polymorphic
			this.props.setFocus(this.props.index);			
		}
	}
  render() {
  	var colorMap = {"needs screening": "red", "Offer Sent": "blue", "Hired": "green"};
  	var statusColor = colorMap[this.props.info.status];

  	var email = this.props.info.name.split(" ")[0] + "@nimble.com"


  		return (<section className="info card" onClick={this.handleClick}>
  			<div className="face card-section">
  				<img src={ face } alt="applicant's face"/>
  			</div>
  			<div className="name-info card-section">
  				<h1>{this.props.info.name}</h1>
  				<p className="email">{ email }</p>
  			</div>
  			<div className="status card-section">
  				<p className={"status-dot " + statusColor}></p>
  				<p>{this.props.info.status}</p>
  			</div>
  			<div className="application-date card-section">
  				<p>{this.props.info.applicationDate}</p>
  			</div>
  			<div className="last-action card-section">
  				<p>{this.props.info.lastAction || "No Action"}</p>
  			</div>
  			<div className="location card-section">
  				<p>{this.props.info.location}</p>
  			</div>
  			<div className="high-needs card-section">
  				<p>{this.props.info.highNeeds || "High Needs"}</p>
  			</div>
  		</section>
  	);
  }
}

class Overlay extends Component {
	constructor(props) {
	    super(props);
	    this.handleCloseClick = this.handleCloseClick.bind(this);
	    this.handleNextClick = this.handleNextClick.bind(this);
	    this.handlePreviousClick = this.handlePreviousClick.bind(this);
	  }

	handleCloseClick() {
		this.props.setFocus(undefined);
	}

	handleNextClick() {
		this.props.setFocus(this.props.index + 1);
	}

	handlePreviousClick() {
		this.props.setFocus(this.props.index - 1);
	}
  render() {
  		return (<div className="overlay">
  			<article className="overlay-box">
  			<nav>
  				<button onClick={this.handlePreviousClick}>PREVIOUS</button>
  				<button onClick={this.handleCloseClick}>CLOSE</button>
  				<button onClick={this.handleNextClick}>NEXT</button>
  			</nav>
  			<InfoCard info={this.props.info} index={this.props.index} />
  			<section className="overlay-extended-info">
  				<h1>Nimble Score: 286</h1>
  				<p>
  					<b>Bio:</b> This is some basic bio information that the user filled out.
  					This is some basic bio information that the user filled out.
  					This is some basic bio information that the user filled out.
  					This is some basic bio information that the user filled out.
  					This is some basic bio information that the user filled out.
  					This is some basic bio information that the user filled out.
  				</p>
  				<h4>Work History</h4>
  				<ul>
  					<li><b>Sample Work Place</b> <i>Job Title</i> from: 9/22/15 to: 1/1/17</li>
  					<li><b>Sample Work Place</b> <i>Job Title</i> from: 9/22/15 to: 1/1/17</li>
  					<li><b>Sample Work Place</b> <i>Job Title</i> from: 9/22/15 to: 1/1/17</li>
  					<li><b>Sample Work Place</b> <i>Job Title</i> from: 9/22/15 to: 1/1/17</li>
  					<li><b>Sample Work Place</b> <i>Job Title</i> from: 9/22/15 to: 1/1/17</li>
  					<li><b>Sample Work Place</b> <i>Job Title</i> from: 9/22/15 to: 1/1/17</li>
  					<li><b>Sample Work Place</b> <i>Job Title</i> from: 9/22/15 to: 1/1/17</li>
  				</ul>
  			</section>
  			</article>
  		</div>
  	);
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      applicants: applicants_arr,
      focus: undefined
    };

    this.setFocus = this.setFocus.bind(this);
  }

  setFocus(index) {
  	// This silently allows previously and next to wrap from end -> beginning
  	if(index < 0) {
  		index = this.state.applicants.length - 1;
  	}

  	if(index >= this.state.applicants.length) {
  		index = 0;
  	}

  	this.setState(prevState => ({
      focus: index
    }));
  }
  render() {
  	var app = this;
  	var cards = this.state.applicants.map(function(info, index){
  		return <InfoCard key={index} info={info} index={index} setFocus={app.setFocus} />
  	});

  	var overLay = "";
  	if (this.state.focus !== undefined){
  		overLay = <Overlay info={this.state.applicants[this.state.focus]} index={this.state.focus} setFocus={this.setFocus} />
  	}

    return (
      <div className="App">
        <div className="App-header">
          <h2>Nimble Applicants</h2>
        </div>
        <div className="applicants-wrapper">
          { cards }
        </div>
        { overLay }
      </div>
    );
  }
}

export default App;
