import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const CreateTask = () => {
    const TaskHeader = () => (
        <div className="create-task--header">
            Создать задачу
        </div>
    )

    const TaskBody = () => (
        <div className="create-task--body">
            <form>
                <div className="create-task--body__title">
                    <label >
                        Название:
                        <input type="text" className="create-task--body__title--inputtitle" />
                    </label>
                </div>

                <div className="create-task--body__type">
                    <span>
                        <label className="create-task--body__type--LabelType">
                            Тип задачи:
                            <select className = "create-task--body__type--LabelType__InputT1pe">
                                 <option value="Тип 1" style = "background-image:url(../../static/icons/taskType.png)">Тип задачи</option>
                                 <option value="Тип 2 Hovered">Тип 2 Hovered</option>
                                 <option value="Тип 3">Тип 3</option>
                             </select>
                            <div className= "test"
                        </label>
                    </span>
                    <span>
                        <label className="create-task--body__type--LabelProject">
                            Проект:
                            <select className = "create-task--body__type--LabelProject__InputText">
                                 <option value="Тип 1">АИС "СУПД"</option>
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
                            <select className = "create-task--body__executor--inputexecutor">

                                 <option value="Тип 1">Сидоров И. А.</option>
                                 <option value="Тип 2 Hovered">Тип 2 Hovered</option>
                                 <option value="Тип 3">Тип 3</option>
                             </select>
                        </label>
                    </span>
                    <span>
                        <label className="create-task--body__executor--labelhours">
                            Оценка времени в часах:
                            <input type="number" className="create-task--body__executor--inputhours" />
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
                            <input type="date" className="create-task--body__type__datetime--InputStartDate" />
                        </div>

                        <div className="create-task--body__type__datetime--totalstart--timestart">
                        <label className="create-task--body__type__datetime--totalstart--labeltimestart">
                            Время
                        </label>
                            <input type="time" className="create-task--body__type__datetime--inputtimestartproject" />
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
                                <input type="date" name="dateEnd" className="create-task--body__type__datetimeend--InputEndDate"/>
                            </div>

                            <div className="create-task--body__type__datetimeend--totalend--timeend">
                            <label className="create-task--body__type__datetimeend--totalend--labeltimeend">
                                Время
                            </label>
                                <input type="time" className="create-task--body__type__datetimeend--inputtimeendproject" />
                            </div>
                        </div>

                </div>
                </div>
                
                <div className="create-task--body__desc">
                    <label>
                        Описание:
                        <textarea className="create-task--body__desc--TextareaDesk"  />
                    </label>
                </div>

                <div className="create-task--body__create">
                <button className = "create-task--body__create--buttonClose">Создать</button>
                </div>

            </form>
        </div>
    )

    return (
        <div className="create-task">
            <TaskHeader />
            <TaskBody />
        </div>
    )
}

export default CreateTask;