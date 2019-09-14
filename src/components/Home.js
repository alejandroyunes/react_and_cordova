import React, { Component } from 'react'
import '../App.css';

import Image from './Image'

class Home extends React.Component {
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

        let count = 0;

        let vowels = "aeiou";
        let reg = /\d+/g;
        let result = txt.match(reg);


        for (var i = 0; i < txt.length; i++) {
            if (vowels.indexOf(txt[i].toLowerCase()) > -1) {
                count++;

            }
        }

        let r = new RegExp('\\d', 'g')
            , countNum = 0

        while (r.exec(result)) countNum++;



        alert("la cantidad de vocales son: " + count + " y de números es: " + countNum);

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
                </div>
                <Image/>

            </>
        );
    }
}

export default Home



