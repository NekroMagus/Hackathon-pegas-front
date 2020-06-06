import React, {Component} from 'react';
import './style.scss';
import photo from '../../static/graphic.jpg';

export default class TestResult extends Component {
    render() {
        return (
            <div className="col-md-5 TestResult__marg">
                <img src={photo} alt=""/>
            </div>
        )
    }
}