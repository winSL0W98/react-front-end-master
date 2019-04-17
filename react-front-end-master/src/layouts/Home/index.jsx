import React from 'react';
import BlockMenu from '../../components/BlockMenu/index.jsx';
import Task from '../../components/Task/index.jsx';
import CreateTask from '../../components/CreateTask/index.jsx';

import './style.scss';

class HomePage extends React.Component {
  render() {
    return (
        <div className = "Main">
          <BlockMenu />
          <CreateTask />
          <Task />
        </div>
    )
  }
}

export default HomePage;
