import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Dataquotes } from "./data";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.changeQuote = this.changeQuote.bind(this);
        this.getRandomNumber = this.getRandomNumber.bind(this);

        let initalIndex =  Math.floor(Math.random() * Dataquotes.length)
        this.state = {
            quotes: Dataquotes,
            index: initalIndex,
            text: Dataquotes[initalIndex].quote,
            author: Dataquotes[initalIndex].author,
        };
    }

    getRandomNumber(currentIndex = 0) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * this.state.quotes.length);
        } while (randomNumber === currentIndex);
        return randomNumber;
    }

    changeQuote() {
        const index = this.getRandomNumber(this.state.index);
        console.log(index)
        this.setState({
            index: index,
            text: this.state.quotes[index].quote,
            author: this.state.quotes[index].author
        });
    }

    render() {
        return (
            <div id={"quote-box"}>
                <p id={"text"}>{this.state.text}</p>
                <p id={"author"}>{this.state.author}</p>
                <button id={"new-quote"} onClick={this.changeQuote}>New Quote</button>
            </div>
        );
    }
}


