import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";
import moment from "moment";
import FutureList from "./Components/FutureList";

class App extends Component {
  state = {
    todayTasks: [
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
    futureTasks: []
  };

  addTask = (title, details, due) => {
    let newTask = { title: title, details: details, due: due };
    if (due && due.isAfter(moment(), "day")) {
      let tasks = this.state.futureTasks;
      tasks.push(newTask);
      this.setState({ futureTasks: tasks });
    } else {
      let tasks = this.state.todayTasks;
      tasks.push(newTask);
      this.setState({ todayTasks: tasks });
    }
    this.updateLocalStorage();
  };

  updateLocalStorage = () => {
    // This next line will stringify the tasks list
    let tasks = JSON.stringify({
      todayTasks: this.state.todayTasks,
      futureTasks: this.state.futureTasks
    });
    localStorage.setItem("tasks", tasks);
  };

  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      // The following iterations converts a stringified due date to a moment object.
      tasks.todayTasks.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      tasks.futureTasks.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      this.setState({
        todayTasks: tasks.todayTasks,
        futureTasks: tasks.futureTasks
      });
    }
  };
  
  componentDidMount() {
    this.retrieveFromLocalStorage()
  }

  render() {
    return (
      <div className="App">
        <CreateTaskForm addTask={this.addTask.bind(this)} />
        <TodayList tasks={this.state.todayTasks} />
        <FutureList tasks={this.state.futureTasks} />
      </div>
    );
  }
}

export default App;
