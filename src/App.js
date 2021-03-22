import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";
import moment from "moment";

class App extends Component {
  state = {
    tasks: [
      {
        title: "Eat a banana",
        details: "Find a banana. Eat it.",
        due: moment()
      },
      {
        title: "Tell The Monkey to get off his monkey butt and do something.",
        details: "",
        due: moment()
      },
    ],
  };

  addTask = (title, details, due) => {
    let newTask = { title: title, details: details, due: due };
    let tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({ tasks: tasks });
    this.updateLocalStorage();
  };

  updateLocalStorage() {
    let tasks = JSON.stringify({
      tasks: this.state.tasks,
    });
    // console.log('updateLocalStorage: this.state.tasks: ', this.state.tasks);
    // console.log('updateLocalStorage: tasks: ', tasks);
    
    localStorage.setItem("tasks", tasks);
  }

  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      // The following iteration converts a stringified due date to a moment object.
      tasks.tasks.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      this.setState({ tasks: tasks.tasks });
    }
  };
  
  componentDidMount() {
    this.retrieveFromLocalStorage()
  }

  render() {
    return (
      <div className="App">
        <CreateTaskForm addTask={this.addTask} />
        <TodayList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
