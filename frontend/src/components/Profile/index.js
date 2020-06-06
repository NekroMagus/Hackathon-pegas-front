import React, {Fragment} from 'react';
import {Header} from "../Header";
import './style.scss';
import {Input} from "../FormControls/Input";
import {DatePicker, Dropdown, RadioButton, TextField, Theme, Button} from "@liquid-design/liquid-design-react";
import {work} from "./work";
import {GroupSelect} from "../GroupSelect";

const region = [{id: '0', name: 'Республика Алтай'}]

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondName: '',
            patronymic: '',
            city: '',
            street: '',
            name: '',
            school: '',
            thirdName: '',
            studyYear: '',
            projects: '',
            short: '',
            sex: '',
            info: '',
            place: '',
            position: '',
            postCode: '',
            isPassVisible: true
        }
    }

    onInputChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        });
    };

    onInfoChange = (data) => {
        this.setState({
            info: data
        });
    };

    onProjectsChange = (data) => {
        this.setState({
            projects: data
        });
    };

    onHandleRadioClick = (ev) => () => {
        this.setState({
            sex: ev
        })
    }

    onToggleVisibilityChange = () => {
        this.setState({
            isPassVisible: !this.state.isPassVisible
        })
    }


    render() {
        return (<Fragment>
                <Header/>
                <div className="container">
                    <Theme themeName='vibrantCyan'>
                        <div className="profile-title">Заполните ваш профиль</div>
                        <div style={{marginBottom: '120px'}} className="df pr">
                            <div className="profile__col">
                                <div className="df jcsb">
                                    <div className="profile__photo"/>
                                    <div className="profile__name">
                                        <Input style={{width: '325px', marginBottom: '20px'}} label='Имя*'
                                               name='firstName'
                                               onChange={this.onInputChange} value={this.state.firstName}/>
                                        <Input style={{width: '325px', marginBottom: '20px'}} label='Фамилия*'
                                               name='lastName'
                                               onChange={this.onInputChange} value={this.state.lastName}/>
                                    </div>
                                </div>
                                <Input readOnly={true} label='Эл. почта' name='email' value={this.state.email}/>
                                <div style={{marginBottom: '50px'}} className="df jcsb">
                                    <Input readOnly={this.state.isPassVisible}
                                           style={{width: '250px', marginBottom: '20px'}}
                                           label='Пароль*' type='password'
                                           name='pass'
                                           onChange={this.onInputChange} value={this.state.pass}/>
                                    <label className="toggler">
                                        <input type="checkbox" onChange={this.onToggleVisibilityChange}/>
                                        <span>Редактировать</span>
                                    </label>
                                </div>
                                <div className="df jcsb">
                                    <Input style={{width: '241px', marginBottom: '20px'}} label='Отчество*'
                                           name='patronymic'
                                           onChange={this.onInputChange} value={this.state.patronymic}/>
                                    <DatePicker withCalendar startDateLabel='Дата рождения'/>
                                </div>
                                <div style={{marginBottom: '20px'}} className="df jcsb aic">
                                    <div className="df jcsb aic" style={{paddingTop: '10px', width: '241px'}}>
                                        <RadioButton isSelected={this.state.sex === 0}
                                                     onClick={this.onHandleRadioClick(0)}
                                                     label='Мужской'/>
                                        <RadioButton isSelected={this.state.sex === 1}
                                                     onClick={this.onHandleRadioClick(1)}
                                                     label='Женский'/>
                                    </div>
                                    <Dropdown style={{backgroundColor: '#f8f8fc'}} label='Социальное положение'
                                              options={work}/>
                                </div>
                                <div style={{marginBottom: '50px'}} className="df jcsb">
                                    <Input style={{width: '241px', marginBottom: '20px'}} label='Место работы'
                                           name='place'
                                           onChange={this.onInputChange} value={this.state.place}/>
                                    <Input style={{width: '241px', marginBottom: '20px'}} label='Должность'
                                           name='position'
                                           onChange={this.onInputChange} value={this.state.position}/>
                                </div>
                                <div className="profile__subtitle">Адрес</div>
                                <div className="df jcsb">
                                    <Input style={{width: '241px', marginBottom: '20px'}} label='Индекс'
                                           name='postCode'
                                           onChange={this.onInputChange} value={this.state.postCode}/>
                                    <div style={{paddingTop: '20px'}}>

                                        <Dropdown defaultValue={region[0]}
                                                  style={{backgroundColor: '#f8f8fc', height: '40px'}}
                                                  options={region}/>
                                    </div>
                                </div>
                                <div style={{marginBottom: '50px'}} className="df jcsb">
                                    <Input style={{width: '241px', marginBottom: '20px'}} label='Город'
                                           name='city'
                                           onChange={this.onInputChange} value={this.state.city}/>
                                    <Input style={{width: '241px', marginBottom: '20px'}} label='Улица'
                                           name='street'
                                           onChange={this.onInputChange} value={this.state.street}/>
                                </div>
                                <div className="profile__subtitle">Контакты</div>
                                <div className="df jcsb">
                                    <Input style={{width: '235px', marginBottom: '20px'}} label='Телефон'
                                           name='phone'
                                           onChange={this.onInputChange} value={this.state.phone}/>
                                    <div className="df jcsb">
                                        <div className="profile__social"
                                             style={{backgroundImage: `url(/static/auth/vkicon.png)`}}></div>
                                        <Input style={{width: '202px', marginBottom: '20px'}} label='Вконтакте'
                                               name='vk'
                                               onChange={this.onInputChange} value={this.state.vk}/>
                                    </div>
                                </div>
                                <div className="df jcsb">
                                    <div className="df jcsb">
                                        <div className="profile__social"
                                             style={{backgroundImage: `url(/static/auth/yt.png)`}}></div>
                                        <Input style={{width: '202px', marginBottom: '20px'}} label='Youtube'
                                               name='yt'
                                               onChange={this.onInputChange} value={this.state.yt}/>
                                    </div>
                                    <div className="df jcsb">
                                        <div className="profile__social"
                                             style={{backgroundImage: `url(/static/auth/insta.png)`}}></div>
                                        <Input style={{width: '202px', marginBottom: '20px'}} label='Instagram'
                                               name='insta'
                                               onChange={this.onInputChange} value={this.state.insta}/>
                                    </div>
                                </div>
                                <div className="df jcsb">
                                    <div className="df jcsb">
                                        <div className="profile__social"
                                             style={{backgroundImage: `url(/static/auth/tw.png)`}}/>
                                        <Input style={{width: '202px', marginBottom: '20px'}} label='Twitter'
                                               name='tw'
                                               onChange={this.onInputChange} value={this.state.tw}/>
                                    </div>
                                    <div className="df jcsb">
                                        <div className="profile__social"
                                             style={{backgroundImage: `url(/static/auth/FBicon.png)`}}/>
                                        <Input style={{width: '202px', marginBottom: '20px'}} label='Facebook'
                                               name='fb'
                                               onChange={this.onInputChange} value={this.state.fb}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginLeft: '65px'}} className="profile__col">
                                <TextField
                                    style={{width: '100%'}}
                                    label='Информация'
                                    placeholder='Расскажите о себе и ваших достижениях подробно. Это поможет привлечь больше соратников к вашему проекту'
                                    grey onChange={this.onInfoChange} value={this.state.info} multiline/>
                                <Input placeholder='Кратко напишите о себе'
                                       label='Краткая информация которая будет отображаться под вашим фото'
                                       name='short'
                                       onChange={this.onInputChange} value={this.state.short}/>
                                <TextField
                                    style={{width: '100%'}}
                                    label='Реализованные проекты на в рамках платформы «Лидеры Алтая»'
                                    placeholder='Расскажите в каких проектов вы участвовали ренее и каких результатов удалось достичь'
                                    grey onChange={this.onProjectsChange} value={this.state.projects} multiline/>
                                <div className='df jcfe'>
                                    <Button style={{width: '246px'}} size='big'>Создать проект</Button>
                                </div>
                                <div className="profile__subtitle">Адрес</div>
                                <GroupSelect />
                                <div className='df jcfe'>
                                    <Button style={{width: '246px'}} size='big'>Сохранить</Button>
                                </div>
                            </div>
                            <div className="profile__sidebar">
                                <div className="profile__sidebar-avatar" />
                                <div className="profile__sidebar-name">Активист</div>
                                <div className="profile__sidebar-info">отсталось набрать 98 баллов до статуса «Лидер мнений»</div>
                            </div>
                        </div>
                    </Theme>
                </div>

            </Fragment>
        )
    }
}

export default Profile;
