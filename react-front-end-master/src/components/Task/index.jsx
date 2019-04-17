import React from 'react';
import PropTypes from 'prop-types';

import Shape from '../../static/icons/Shape.png';
import Vector from '../../static/icons/Vector.png';
import TaskType from '../../static/icons/taskType.png';
import './style.scss';

const Task = () => {
    const TaskHeader = () => (
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
                <span>Рефакторинг приложения Punto для android</span>
                <span className="task--header__title--status">в&nbsp;процессе</span>
            </div>
        </div>
    );

    const TaskBody = () => (
        <div className="task--body">
            <div className="task--body__author">
                <span className="task--body__author--desc">
                    <span>Автор:</span>
                    <span>Георгий Баранов</span>
                </span>
                <span className="task--body__author--deadlines">
                    <span className="green">Старт: 12.09.2018</span>
                    <span className="red">Дедлайн: 17.11.2018</span>
                </span>
            </div>
            <div className="task--body__executor">
                <span className="task--body__author--desc">
                    <span>Исполнитель:</span>
                    <span>Вася Криворучко</span>
                </span>
                <span className="task--body__executor--hours">
                    ЧАСОВ: 275
                </span>
            </div>
        </div>
    );

    const TaskFooter = () => (
        <div className="task--footer">
            Описание:
            <div className="task--footer__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con
            </div>
        </div>
    );

    return (
        <div className="task">
            <TaskHeader />
            <TaskBody />
            <TaskFooter />
        </div>
    )
};

export default Task;