import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm"

class App extends Component {
  state = {
    tasks: [
      {
        title: "Eat a banana",
        details: "Find a banana. Eat it."
      },
      {
        title: "Tell The Monkey to get off his monkey butt and do something.",
        details: ""
      }
  ]
}

addTask = (title, details) => {
  let newTask = { title: title, details: details }
  let tasks = this.state.tasks
  tasks.push(newTask)
  this.setState({ tasks: tasks })
}

  render() {

    return (
      <div className="App">
        <CreateTaskForm addTask={this.addTask}/>
        <TodayList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;