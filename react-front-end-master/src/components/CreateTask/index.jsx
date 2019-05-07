import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {login} from '../../actions/authActions'
import './style.scss';



class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.authToken = this.authToken.bind(this);
        this.state = {
            title: "",
            text: "",
            work_evaluation: 0,
            thread: "",
            worker: "",
            date_start: "",
            date_end: "",
            type: "",
            is_private: true,
            life_cycle: "",
            direction: 0
        }
    }

    handleClick = () => {
        this.props.onClick();
    };

    onChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    authToken = event => {
        event.preventDefault();
        // const authToken = {
        //     username: 'Ruslan',
        //     password: 'admin'
        // };

        const Task = {
            title: this.state.title,
            text: this.state.text,
            work_evaluation: this.state.work_evaluation,
            thread: "1",
            worker: "1",
            date_start: "2019-04-23",
            date_end: "2019-04-23",
            type: "ID_TESTING",
            is_private: true,
            life_cycle: "ID_REVIEW",
            direction: 1
        };

        // axios.post('http://localhost:8000/api/auth-token/', authToken).then(res => {
        //     const token = res.data.access;
        //     alert("Полученный: " + token);
        //     localStorage.setItem('JWT1', token);
        //
        //     }
        // );

        const token = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('jwtToken')}
        };

        axios.post ('http://localhost:8000/api/task/', Task, token)
            .then(res => console.log(res.data));

        this.handleClick();
    };




    render () {

        return (

 <div className="blackout" onClick={this.handleClick}>
        <div className="create-task" >
            <div className="create-task--header">
                Создать задачу
            </div>



            <div className="create-task--body">
                <form onSubmit={this.authToken}>
                    <div className="create-task--body__title">
                        <label>
                            Название:
                            <input type="text"
                                   name = "title"
                                   value={this.state.title}
                                   onChange={this.onChange}
                                   className="create-task--body__title--inputtitle"
                            />
                        </label>
                    </div>

                    <div className="create-task--body__type">
                    <span>
                        <label className="create-task--body__type--LabelType">
                            Тип задачи:
                            <select className="create-task--body__type--LabelType__InputT1pe"
                                    // value={this.state.type}
                                    // onChange={this.onChangeType}
                            >
                                 <option value="Тип 1">Тип задачи</option>
                                 <option value="Тип 2 Hovered">Тип 2 Hovered</option>
                                 <option value="Тип 3">Тип 3</option>
                             </select>
                        </label>
                    </span>
                        <span>
                        <label className="create-task--body__type--LabelProject"
                               // value={this.state.type}
                               // onChange={this.onChangeType}
                        >
                            Проект:
                            <select className="create-task--body__type--LabelProject__InputText">
                                 <option value="Тип 1"> АИС "СУПД"</option>
                                 <option value="Тип 2 Hovered">Тип 2 Hovered</option>
                                 <option value="Тип 3">Тип 3</option>
                             </select>
                        </label>
                    </span>
                    </div>

                    <div className="create-task--body__executor">
                    <span>
                        <label className="create-task--body__executor--labelexecutor">
                            Исполнитель:
                            <select className="create-task--body__executor--inputexecutor"
                                    // value={this.state.worker}
                                    // onChange={this.onChangeWorker}
                            >

                                 <option value="Тип 1">Сидоров И. А.</option>
                                 <option value="Тип 2 Hovered">Тип 2 Hovered</option>
                                 <option value="Тип 3">Тип 3</option>
                             </select>
                        </label>
                    </span>
                        <span>
                        <label className="create-task--body__executor--labelhours">
                            Оценка времени в часах:
                            <input
                                type="number"
                                name = "work_evaluation"
                                className="create-task--body__executor--inputhours"
                                value={this.state.work_evaluation}
                                onChange={this.onChange}
                            />
                        </label>
                    </span>
                    </div>

                    <div className="create-task--body__type">
                        <div className="create-task--body__type__datetime">

                            <label className="create-task--body__type__datetime--labelstartproject">
                                Начало проекта:
                            </label>
                            <div className="create-task--body__type__datetime--totalstart">
                                <div className="create-task--body__type__datetime--totalstart--datatimestartproject">
                                    <label className="create-task--body__type__datetime--totalstart--labelstartdata">
                                        Дата
                                    </label>
                                    <input type="date" className="create-task--body__type__datetime--InputStartDate"/>
                                </div>

                                <div className="create-task--body__type__datetime--totalstart--timestart">
                                    <label className="create-task--body__type__datetime--totalstart--labeltimestart">
                                        Время
                                    </label>
                                    <input
                                        type="time"
                                        className="create-task--body__type__datetime--inputtimestartproject"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="create-task--body__type__datetimeend">
                            <label className="create-task--body__type__datetimeend--labelendproject">
                                Завершение:
                            </label>
                            <div className="create-task--body__type__datetimeend--totalend">
                                <div className="create-task--body__type__datetimeend--totalend--datatimestartproject">

                                    <label className="create-task--body__type__datetimeend--totalend--labelenddata">
                                        Дата
                                    </label>
                                    <input type="date" name="dateEnd"
                                           className="create-task--body__type__datetimeend--InputEndDate"/>
                                </div>

                                <div className="create-task--body__type__datetimeend--totalend--timeend">
                                    <label className="create-task--body__type__datetimeend--totalend--labeltimeend">
                                        Время
                                    </label>
                                    <input type="time"
                                           className="create-task--body__type__datetimeend--inputtimeendproject"/>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="create-task--body__desc">
                        <label>
                            Описание:
                            <textarea className="create-task--body__desc--TextareaDesk"
                                      value={this.state.text}
                                      name = "text"
                                      onChange={this.onChange}
                            />
                        </label>
                    </div>

                    <div className="create-task--body__create">
                        <button
                            className="create-task--body__create--buttonClose"
                           >
                            Создать
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        )
    }
}


export default CreateTask;