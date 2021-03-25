import React, { Component } from 'react'

export default class ToDo extends Component {
    state = {
        input:"",
    }
    render() {
        return (
            <form>
                <input/>
                <button>Add</button>
            </form>
        )
    }
}
