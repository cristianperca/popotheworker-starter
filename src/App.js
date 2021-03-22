import React, { Component } from "react";
import TodayList from "./Components/TodayList";
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

  render() {

    return (
      <div className="App">
        <TodayList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;