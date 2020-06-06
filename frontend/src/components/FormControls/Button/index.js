import React from 'react'
import './style.scss'

const Button = ({title, type, style}) => (
    <button className='btn' type={type} style={style}>
        {title}
    </button>
);

export default Button;
