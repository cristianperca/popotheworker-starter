import React, { Component } from "react";
import Datetime from "react-datetime";
import "../DatetimePicker.css";

class CreateTaskForm extends Component {
  state = {
    title: "",
    details: "",
    due: ""
  };

  addTask = () => {
    if (this.state.title) {
      this.props.addTask(this.state.title, this.state.details, this.state.due);
      this.setState({ title: "", details: "", due: "" });
    }
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
        />
        <textarea
          placeholder="Details"
          value={this.state.details}
          onChange={(e) => {
            this.setState({ details: e.target.value });
          }}
        />

        <Datetime
          defaultValue="Optional Due Date"
          value={this.state.due}
          onChange={(momentObj) => {
            this.setState({ due: momentObj });
          }}
        />

        <input type="submit" value="Create Task" onClick={this.addTask} />
      </div>
    );
  }
}

export default CreateTaskForm;
