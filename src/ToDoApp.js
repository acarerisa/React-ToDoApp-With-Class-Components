import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";

export default class ToDoApp extends Component {
  state = {
    tasks: [
      { name: "task1", done: false },
      { name: "task2", done: false },
    ],
  };
  addToDo = (newTodo) => {
    if (newTodo === "") {
      alert("Please write something to do");
    } else if (this.state.tasks.find((todo) => todo.name === newTodo)) {
      alert("Already add it");
    } else {
      const newTask = {
        name: newTodo,
        done: false,
      };
      this.setState({
        tasks: [...this.state.tasks, newTask],
      });
    }
  };

  toggleToDo = (name) => {
    const yeni = this.state.tasks.map((task) => {
      if (task.name === name) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState({
      tasks: yeni,
    });
  };
  removeToDo = (name) => {
    const filtered = this.state.tasks.filter((task) => task.name !== name);
    this.setState({
      tasks: filtered,
    });
  };

  render() {
    return (
      <>
        <ToDo addToDo={this.addToDo} />
        <ToDoList
          tasks={this.state.tasks}
          toggleToDo={this.toggleToDo}
          removeToDo={this.removeToDo}
        />
      </>
    );
  }
}
