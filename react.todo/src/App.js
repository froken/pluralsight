import React, { Component } from 'react';
import './App.css';
import TaskList from './components/task/TaskList';

class App extends Component {
  render() {
    const tasks = [{id:1, text:'Hello'}]; 

    return (
      <div className="App">
        <TaskList tasks={tasks} />
      </div>
    );
  }
}

export default App;
