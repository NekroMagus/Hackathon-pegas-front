import React, {Component} from 'react';
import './style.scss';
import photo from '../../static/children_photo.png';


export default class Children extends Component {
    render() {
        return (
            <>
                <div className="children__info col-md-8">
                    <div className="row">
                        <div className="children__display col-md-8"><p
                            className="children__name">{this.props.user && this.props.user.name ? this.props.user.name : 'Патрикеев Иван Степанович'}</p>
                            <p className="children__item">{this.props.user && this.props.user.city ? this.props.user.city : 'г.Ярославль'}</p>
                            <p className="children__item">{this.props.user && this.props.user.educationInstitution ? this.props.user.educationInstitution : 'МОУСОШ №9'}</p>
                            <p className="children__item">{this.props.user && this.props.user.class ? this.props.user.class : '10 а'}</p>
                        </div>
                        {this.props.user && this.props.user.photo ? this.props.user.photo :
                            <img className="children__photo com-md-4" src={photo} alt=""/>}
                    </div>
                </div>
            </>
        );
    }
}