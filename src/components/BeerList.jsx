import React, { Component } from 'react';
import axios from 'axios';
import Beer from './Beer';

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

    loop = () => {
        const { beers } = this.state;

        const sliced = Math.floor(beers.length/2);

        for (let index = sliced; index < beers.length; index++) {
           if (beers[index].id % 2 === 1) {
               console.log(beers[index].id);
           }
        }
    }

    createElements(){
        const { beers } = this.state;

        let firstRow = [];

        for (let index = 0; index < 4; index++) {
            firstRow.push(<div>{`${beers[index].id} : ${beers[index].name}`}</div>);
        }

        console.log(firstRow);
        const sliced = Math.floor(beers.length/2);
        
        let oddElements = [];
        
        for(let i = sliced; i < beers.length; i++){
            if (beers[i].id % 2 === 1) {
                oddElements.push(<div>{`${beers[i].id} : ${beers[i].name}`}</div>);
            }
        }
    }

    render() {
        // const {beers} = this.state;

        // let arr = beers.slice(0, 5);

       // this.loop();

        return(
            <div>
                {this.createElements()}
            </div>
        );
    }
}

export default BeerList;