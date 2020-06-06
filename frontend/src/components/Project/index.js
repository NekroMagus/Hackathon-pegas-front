import React, {Component} from 'react';
import './style.scss';
import nonactive from '../../static/Group 5.png';
import active from '../../static/Group 6.png'
import Tour from "../Tour";

export default class Project extends Component {
    render() {
        return (
            <div className="col-md-5">
                <div className="col-md-12">
                    <p className="Project__title">Проекты {this.props.user && this.props.user.name ? this.props.user.name + 'a' : 'Ивана'}</p>
                </div>
                <div className="Project__block col-md-4">
                    <div>
                        <img className="Project__img" src={nonactive}/>
                        <p className="Project__description">{this.props.project && this.props.project.title ? this.props.project.title : 'Название проекта'}</p>
                        <p className="Project__status">{this.props.project && this.props.project.status ? this.project.status : 'В разработке'}</p>
                    </div>
                    <div>
                        <img className="Project__img" src={active}/>
                        <p className="Project__description">{this.props.project && this.props.project.title ? this.props.project.title : 'Название проектов'}</p>
                        <p className="Project__status">{this.props.project && this.props.project.status ? this.project.status : 'Сдан'}</p>
                    </div>
                </div>
            </div>
        )
    }
}