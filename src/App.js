import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Dataquotes } from "./data";
import {Colores} from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export class App extends React.Component {

    constructor(props) {
        super(props);

        this.changeQuote = this.changeQuote.bind(this);
        this.getRandomNumber = this.getRandomNumber.bind(this);

        let initialIndex =  Math.floor(Math.random() * Dataquotes.length)
        let colorIndex = Math.floor(Math.random() * Colores.length)
        this.state = {
            quotes: Dataquotes,
            index: initialIndex,
            text: Dataquotes[initialIndex].quote,
            author: Dataquotes[initialIndex].author,
            color: Colores[colorIndex]
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
       const body = document.getElementsByTagName("body");

        const index = this.getRandomNumber(this.state.index);
        const colorIndex = Math.floor(Math.random() * Colores.length)
        console.log(index)
        this.setState({
            index: index,
            text: this.state.quotes[index].quote,
            author: this.state.quotes[index].author,
            color: Colores[colorIndex]
        }, () => {
            // Este callback se ejecuta después de que el estado se haya actualizado
            document.body.style.backgroundColor = this.state.color;
        });

    }

    render() {
        return (
            <div id={"quote-box"}>
                <p style={{color:this.state.color}} id={"text"}>{'"'+this.state.text+'"'}</p>
                <p  style={{color:this.state.color}} id={"author"}>{this.state.author}</p>
                <a style={{ backgroundColor: this.state.color }} id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <button style={{background:this.state.color}} id={"new-quote"} onClick={this.changeQuote}>New Quote</button>

                <span  id={"firma"}> by lucioggm</span>


            </div>
        );
    }
}


