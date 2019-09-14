
import React, { Component } from 'react'
import '../App.css';


class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

        let txt = this.state.value;
        let reversed = txt.split("").reverse().join("");
        document.getElementById("output").innerHTML = reversed;
       

        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className="App">
                    <br /><br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Ingrese el texto:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <h2 id="output"></h2>
                </div>


            </>
        );
    }
}

export default SecondPage



