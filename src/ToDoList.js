import React, { Component } from "react";


export default class ToDoList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          return (
            <div key={index}>
              <li className={task.done ? "done" : ""}
              onClick={()=>this.props.toggleToDo(task.name)} >{task.name}</li>

              <button onClick={()=>this.props.removeToDo(task.name)} >Delete</button>
            </div>
          );
        })}
      </ul>
    );
  }
}
