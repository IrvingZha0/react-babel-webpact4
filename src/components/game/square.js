import React from 'react';

const squreS = {
  background: 'white',
  float: 'left',
  fontSize: '24px',
  lineHeight: '100px',
  height: '100px',
  marginRight: '-1px',
  marginTop: '-1px',
  padding: '0',
  textAlign: 'center',
  width: '100px'
};

export default function Square(props){
    return (
      <button className="square" style={squreS} onClick={props.onClick}>
        {props.value}
      </button>
    );
}
