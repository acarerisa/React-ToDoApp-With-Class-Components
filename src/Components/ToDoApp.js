import React, { Component } from 'react'
import ToDo from './ToDo'
import ToDoList from './ToDoList'

export default class ToDoApp extends Component {
    state = {
        tasks : [
            {id:1, name:"task1", done:false},
            {id:2, name:"task2", done:false}
        ]
    }
    render() {
        return (
            <div>
                <ToDo/>
              <ToDoList tasks = {this.state.tasks} />  
            </div>
        )
    }
}
