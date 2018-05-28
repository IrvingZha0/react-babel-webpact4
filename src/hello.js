import React from 'react';
import Game from './components/game/game';

export default class Hello extends React.Component{
  	render() {
	    return (
	    	<div>
		    	<h1>Hello {this.props.name}!</h1> 
		    	<Game />
	    	</div>
	    );
	}
}