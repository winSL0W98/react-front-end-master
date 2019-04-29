import React from 'react';
import BlockMenu from '../../components/BlockMenu/index.jsx';
import Task from '../../components/Task/index.jsx';
import CreateTask from '../../components/CreateTask/index.jsx';
import HeaderTask from '../../components/HeaderTask/index.jsx';


import './style.scss';
import LoginForm from "../../components/Login";


class HomePage extends React.Component {

  render() {
      return (
        <div className = "Main">
          <HeaderTask/>
          <BlockMenu />
          <LoginForm/>
          {/*<CreateTask*/}

          {/*/>*/}
          {/*<Task />*/}
        </div>
    )
  }
}

export default HomePage;
