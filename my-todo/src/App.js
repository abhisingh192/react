import React from 'react';
import Header from './Header';
import  Form from './Form';
import  Task from './Task';



class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        taskList : []
      };
  }

  addTaskToState(val) {
    const temp = this.state.taskList;
    temp.push(val);
    this.setState({
        taskList:temp
    });
  }

  delTaskFromState(index) {
    const temp = this.state.taskList;
    temp.splice(index,1);
    this.setState({
        taskList:temp
    });
  }


  render() {
    return (
      <div >
        <Header/>
        <Form addTaskToState={this.addTaskToState.bind(this)}/>
        <Task 
          taskList={this.state.taskList}
          delTaskFromState={this.delTaskFromState.bind(this)}
        />
      </div>
    );
  }
}

export default App;
