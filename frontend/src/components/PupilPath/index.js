import React from 'react';
import './style.scss';

const PupilPath = ({onHandleClick, currentScreen}) => {
    return <div className='pupil-path'>
        <div onClick={() => onHandleClick(1)} className={`pupil-path__item rocket ${currentScreen > 1 ? 'fill' : ''}`}/>
        <div onClick={() => onHandleClick(2)} className={`pupil-path__item media ${currentScreen > 2 ? 'fill' : ''}`}/>
        <div onClick={() => onHandleClick(3)} className={`pupil-path__item browser ${currentScreen > 3 ? 'fill' : ''}`}/>
        <div onClick={() => onHandleClick(4)} className={`pupil-path__item layout`}/>
    </div>
}

export default PupilPath
