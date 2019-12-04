import React from 'react';

const Button = (props) => {
    return (
        <button className='button' onClick={()=>{props.handleClick()}}>Interrogate Github Profile</button>
    )
  };

export default Button;