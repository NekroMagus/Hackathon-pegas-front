import React, {Component} from 'react';
import './style.scss';

export default class Tour extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="col-md-12 Tour__top-square " style={this.props.style}>
                    <p className="Tour__text">{this.props.title ? this.props.title : "Креативные индустрии," +
                        " Экология, Гуманитрные технологии, Урбанистика"}</p>
                </div>
                <div className=" Tour__bottom-square col-md-12">
                    <div className="row">
                        <div className="Tour__left">
                            <p className="Tour__price">{this.props.tour ? this.props.tour + '₽' : '5 570₽'}</p>
                            <p className="Tour__days">{this.props.days ? this.props.days + ' в Москве': '5 дней в Москве'}</p>
                        </div>
                        <div className="Tour__right col-md-4">
                            <a className="Tour__href" href="#">Оставить заявку</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}