import React from 'react';
import './style.scss';

class HeaderTask extends React.Component {
    render() {
        return (
            <div className="task-header">
                <div className="task-header_userData">
                    <img src={require("../../static/icons/photo.png")} alt="photo"/>
                    <div className="task-header_userData-info">

                        <label className="task-header_userData-info_labelName">
                            JASON PARKER
                        </label>

                        <label className="task-header_userData-info_labelProfession">
                            ФРОНТЭНД РАЗРАБОТЧИК
                        </label>

                        <label className="task-header_userData-info_labelDepartment">
                            ОТДЕЛ ВЕБ-РАЗРАБОТКИ
                        </label>
                    </div>
                </div>


                <div className="task-header_total">
                    <div className="task-header_total_header-name">
                        <img src={require('../../static/icons/BigTasks.png')} alt="BigTasks"/>
                        СПИСОК ЗАДАЧ
                    </div>

                    <div className="task-header_total_buttons">
                        <div>
                            <button className="task-header_total_buttons_MyProjects">МОИ ПРОЕКТЫ</button>
                        </div>

                        <div>
                            <button className="task-header_total_buttons_CommonProjects">ОБЩИЕ ПРОЕКТЫ</button>

                        </div>

                        <div>
                            <button className="task-header_total_buttons_OpenProjects">ОТКРЫТЫЕ ПРОЕКТЫ</button>
                        </div>

                        <div>
                            <button className="task-header_total_buttons_CloseProjects">ЗАКРЫТЫЕ ПРОЕКТЫ</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default HeaderTask;

