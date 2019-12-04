import React from 'react';

const Button = (props) => {
    return (
        <button className='button' onClick={()=>{props.handleClick()}}>Query Profile</button>
    )
  };

export default Button;