import React from 'react';

import Shape from '../../static/icons/Shape.png';
import Vector from '../../static/icons/Vector.png';
import TaskType from '../../static/icons/taskType.png';
import './style.scss';
import axios from "axios";

class Task extends React.Component{

    state = {
        db: []
    };

        componentDidMount() {
            axios.get('http://localhost:8000/api/task/24/')
                .then(res => {
                    this.setState({db:res.data});
                });
        }


    render () {
        const {db} = this.state;
        return (
        <div className="task">
            <div className="task--header">
                <div className="task--header__type">
                    <div className="task--header__type--text">
                        <img src={TaskType} alt="taskType" />
                        Тип задачи
                    </div>
                    <div className="task--header__type--buttons">
                        <a href="#"><img src={Shape} alt="settings" /></a>
                        <a href="#"><img src={Vector} alt="extraMenu" /></a>
                    </div>
                </div>
                <div className="task--header__title">
                    <span>
                        {this.state.db.title}
                    </span>
                    <span className="task--header__title--status">{this.state.db.life_cycle}</span>
                </div>
            </div>

            <div className="task--body">
                <div className="task--body__author">
                <span className="task--body__author--desc">
                    <span>Автор:</span>
                    <span>Нет автора в БД</span>
                </span>
                    <span className="task--body__author--deadlines">
                    <span className="green">Старт: {this.state.db.date_start}</span>
                    <span className="red">Дедлайн: {this.state.db.date_end}</span>
                </span>
                </div>
                <div className="task--body__executor">
                <span className="task--body__author--desc">
                    <span>Исполнитель:</span>
                    <span>{db.worker && db.worker.username}</span>
                </span>
                    <span className="task--body__executor--hours">
                    ЧАСОВ: {this.state.db.work_evaluation}
                </span>
                </div>
            </div>

            <div className="task--footer">
                Описание:
                <div className="task--footer__desc">
                    {this.state.db.text}
                </div>
            </div>
        </div>
    )
    }
}

export default Task;