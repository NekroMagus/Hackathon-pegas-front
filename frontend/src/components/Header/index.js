import React from 'react';
import './style.scss';

export const Header = ({withRightIcon, rightIconStyles}) => {
	return (
		<div className='header container'>
			<div className="header__logo" />
			<div className="header__item">Лидеры в соц. сетях</div>
			<div className="header__item">Амбассадоры</div>
			<div className="header__item">Проекты</div>
			<div className="header__item">Новости</div>
			<div className="header__item">Правила</div>
			<div className="header__item">Обратная связь</div>
			{withRightIcon ? <div style={{ backgroundImage: `url(${withRightIcon})`, ...rightIconStyles}} className='header__right-icon' /> : ''}
		</div>
	)
};
