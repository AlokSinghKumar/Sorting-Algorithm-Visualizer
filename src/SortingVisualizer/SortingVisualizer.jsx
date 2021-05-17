import React, { Component } from 'react'
import './SortingVisualizer.css'
import { mergeSort } from '../sortingAlgorithm/sortingAlgorithm';

export default class SortingVisualizer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            array: [],
        };
    }


    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 310; i++) {
            array.push(randomIntFromInterval(5, 560));
        }

        this.setState({ array });

    }


    mergeSort() {
        const javaScriptSortedArray = this.state.array.slice().sort();
        const sortedArray = mergeSort(this.state.array)

        console.log(arrayAreEqual(javaScriptSortedArray, sortedArray));
    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                { array.map((value, idx) => {
                    return (
                        < div
                            className="array-bar"
                            key={ idx }
                            style={ { height: `${ value }px` } }
                        ></div>
                    )
                }) }
                <div>
                    <button onClick={ () => this.resetArray() }>Generate New Array</button>
                    <button onClick={ () => this.mergeSort() }>Merge sort</button>
                </div>
            </div>

        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min - 1) + min)
}

function arrayAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }

    return true
}