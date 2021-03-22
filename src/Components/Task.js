import React, { Component } from "react";

class Task extends Component {
  render() {
    let dueDate;
    if (this.props.task.due)
      dueDate = <span>- {this.props.task.due.fromNow()}</span>;
    return (
      <p>
        {this.props.task.title} - {this.props.task.details} {dueDate}
      </p>
    );
  }
}

export default Task;
