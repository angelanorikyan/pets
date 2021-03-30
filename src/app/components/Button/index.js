import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import './index.css';

const Button = (props) => {
  const { onClick } = props;
  const [buttons] = useState([
    {title: 'show only cat', id: 'cat'},
    {title: 'show only dog', id: 'dog'},
  ]);

  const handleClick = (id) => {
    onClick(id);
  }
  return (
    <div className='button-wrapper'>
      {buttons.map(button =>
      <div 
        key={uuidv4()} 
        className='toggle-button'
        onClick={() => handleClick(button.id)}
      >{button.title}</div>
      )}
    </div>
  );
}

export default Button;