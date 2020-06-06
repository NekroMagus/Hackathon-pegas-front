import React, {Component} from 'react';
import Button from "../FormControls/Button";
import './style.scss';
import {Header} from "../Header";
import Children from "../Children";
import Project from "../Project";
import Tour from "../Tour";
import TestResult from "../TestResult/TestResult";

export default class Parent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="parent__info col-md-4">
                            <div className="parent__title">Доверенное лицо</div>
                            <p className="parent__item">{this.props.user && this.props.user.name ? this.props.user.name : 'Патрикеев Степан Анатольевич'}</p>
                            <p className="parent__item">{this.props.user && this.props.user.city ? this.props.user.city : 'г.Ярославль'}</p>
                            <p className="parent__item">{this.props.user && this.props.user.phone ? this.props.user.phone : '8 928 333 65 40'}</p>
                            <Button title={'Добавить ребёнка'} type={'button'} style={styles}/>
                        </div>
                        <Children/>
                    </div>
                </div>
                <div className="row">
                    <Project/>
                    <TestResult/>
                </div>
                <div className="row">
                    <Tour/>
                    <Tour style={{backgroundColor: "#37C47A"}} tour='3 760' days='4 дня' title='Креативные индустрии, Экология, Энергетика, Транспорт и космос'/>
                    <Tour style={{backgroundColor:"#C4C4C4"}} tour='4 230' days='4 дня' title='Энергетика, Транспорт и Космос, Биотехнологии и Медицина'/>
                </div>
            </>
        );
    }
}
const styles = {
    backgroundColor: "white",
    width: "200px",
    margin: "40px 0",
    fontWeight: "bold",
    border: "2px solid black"
};