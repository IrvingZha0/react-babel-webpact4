import React from "react";
import ReactDOM from "react-dom";
import Hello from './hello';

const styles = {
  fontFamily: 'sans-serif',
};

const Index = () => {
  return <div style={styles}>
	    <Hello name="gamer" />
    </div>
  ;
};

ReactDOM.render(<Index />, document.getElementById("index"));