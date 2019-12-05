import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {
  return (
    <p>
      {
        props.length >= 5 ? 
        'Text long enough' :
        'Text too short'
      }
    </p>
  );
}

export default ValidationComponent;