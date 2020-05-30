import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {

    state = {
        input: [],
    }

    handleChange = event => {
        this.setState({ input: event.target.value });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        const text = {
            input: this.state.input,
        };

        axios.post(`https://gitignore.io/api/${text.input}`)
            .then(res => {
                console.log(res);
            })
    }
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter programming language:
                    <input type="text" name="text" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default Input;