import React, { Component } from 'react';
import axios from 'axios';

class BeerList extends Component {

    state = {
        beers: []
    }

    componentDidMount() {
        axios.get(`https://api.punkapi.com/v2/beers`)
        .then(res => {
            this.setState({ beers: res.data });
        })
    }

    createElements(){
        const { beers } = this.state;

        // first 5 beers
        let arr = beers.slice(0, 5);
        let firstFive = [];

        for (let index = 0; index < arr.length; index++) {
            firstFive.push(<div>{`${arr[index].id} : ${arr[index].name}`}</div>)
        }

        // half of the list
        const sliced = Math.floor(beers.length/2);

        let oddElements = [];

        // only odd numbers from half the list
        for(let i = sliced; i < beers.length; i++){
            if (beers[i].id % 2 === 1) {
                oddElements.push(<div>{`${beers[i].id} : ${beers[i].name}`}</div>);
            }
        }

        // merge theese two into one array
        let finalArray = [];
        finalArray.push(...firstFive, ...oddElements);

        for (let index = 0; index < finalArray.length; index++) {
            console.log(finalArray[index])
        }

        return finalArray;
    }

    render() {
        return(
            <div>
                {this.createElements()}
            </div>
        );
    }
}

export default BeerList;