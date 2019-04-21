import React from 'react';
import MenuItem from '../MenuItem/index.jsx';

import exit from '../../static/icons/exit.png';
import notifications from '../../static/icons/notifications.png';
import privated from '../../static/icons/private.png';
import projects from '../../static/icons/projects.png';
import settings from '../../static/icons/settings.png';
import tasks from '../../static/icons/tasks.png';
import './style.scss';
import Rectangle from "../../static/icons/Rectangle.png";
import PlusButton from "../PlusButton/index";
import CreateTask from "../CreateTask";

const handleClick = ()=>{
  alert('alalal');
};

class BlockMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  _openModal() {
    this.setState({modalOpen: true});
  }

  _closeModal() {
    this.setState({modalOpen: false});
  }






  render() {
    const { modalOpen } = this.state;

    const menuItems = [
      {
        name: 'notifications',
        title: 'Уведомления',
        icon: notifications,
        button: false,
      },
      {
        name: 'tasks',
        title: 'Список задач',
        icon: tasks,
        button: true,
      },
      {
        name: 'projects',
        title: 'Список проектов',
        icon: projects,
        button: true,
      },
      {
        name: 'private',
        title: 'Приватные задачи',
        icon: privated,
        button: true,
      },
      {
        name: 'settings',
        title: 'Настройки',
        icon: settings,
        button: false,
      },
      {
        name: 'exit',
        title: 'Выход',
        icon: exit,
        button: false,
      }
    ];


    return (


        <div className="blockMenu">
          <div className="blockMenu-menu">
            <ul className="menu">
              {menuItems.map(ele => <MenuItem key={ele.name} {...ele} />)}
            </ul>
          </div>
          <div className="img">
            <img src={Rectangle} alt="Rectangle"/>
          </div>
          <PlusButton onClick={this._openModal.bind(this)}/>

          {/* Only show Modal when "this.state.modalOpen === true" */}
          {modalOpen
              ? <CreateTask closeModal={this._closeModal.bind(this)} />
              : ''}


        </div>
        // <Menu vertical className="blockMenu-menu">
        //   <Menu.Item className="blockMenu-menu--item" name='notifications' active={activeItem === 'notifications'} onClick={handleItemClick}>
        //     <div>
        //       <Icon name='bell'/>
        //       Уведомления
        //     </div>
        //     <Label>999</Label>
        //   </Menu.Item>
        //   <Menu.Item className="blockMenu-menu--item" name='tasks' active={activeItem === 'tasks'} onClick={handleItemClick}>
        //     <div>
        //       <Icon name='tasks' />
        //       Список задач
        //     </div>
        //     <PlusButton />
        //   </Menu.Item>
        //   <Menu.Item className="blockMenu-menu--item" name='projects' active={activeItem === 'projects'} onClick={handleItemClick}>
        //     <div>
        //       <Icon name='list' />
        //       Список проектов
        //     </div>
        //     <PlusButton />
        //   </Menu.Item>
        //   <Menu.Item className="blockMenu-menu--item" name='private' active={activeItem === 'private'} onClick={handleItemClick}>
        //     <div>
        //       <Icon name='paperclip' />
        //       Приватные задачи
        //     </div>
        //     <PlusButton />
        //   </Menu.Item>
        //   <Menu.Item className="blockMenu-menu--item" name='settings' active={activeItem === 'settings'} onClick={handleItemClick}>
        //     <div>
        //       <Icon name='settings' />
        //       Настройки
        //     </div>
        //   </Menu.Item>
        //   <Menu.Item className="blockMenu-menu--item" name='exit' active={activeItem === 'exit'} onClick={handleItemClick}>
        //     <div>
        //       <Icon name='window close outline' />
        //       Выход
        //     </div>
        //   </Menu.Item>
        // </Menu>
    );
  };
};

export default BlockMenu;