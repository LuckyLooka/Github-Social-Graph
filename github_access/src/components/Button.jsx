import React from 'react';

const Button = (props) => {
    return (
        <button className='button' onClick={()=>{props.handleClick()}}>Display Results</button>
    )
  };

export default Button;