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

    render() {
        const {beers} = this.state;

        let arr = beers.slice(0, 5);

        this.loop();

        return(
            arr.map(beer => 
                <div className="container">
                    <Beer id={beer.id} name={beer.name} />
                </div>
            )
        );
    }
}

export default BeerList;