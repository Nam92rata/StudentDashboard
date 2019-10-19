import React, { Component } from "react";
import { connect } from "react-redux";
import StudentCard from "./StudentCard";
import ErrorBoundary from "./errorBoundary.js";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class AllCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayData: props.data.sort(function (a, b) {
                var nameA = a[1].name.toUpperCase();
                var nameB = b[1].name.toUpperCase();
                return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
            })
        }
    }

    toggleAlphabet = () => {
        let reversedArray = this.state.displayData.reverse();
        this.setState({ displayData: reversedArray });
    }

    toggleMarks = () => {
        console.log("A")
        let marksSortedArray = this.state.displayData.sort(function (a, b) {
            var marksA = a[1].marks;
            var marksB = b[1].marks;
            return Number(marksB) - Number(marksA)
        })
        this.setState({ displayData: marksSortedArray });


    }
    render() {

        return (
            <div >
                <button className="button" onClick={this.toggleAlphabet}>Alphabet</button>
                <button className="button" onClick={this.toggleMarks}>Marks</button>
                <div class="grid-container">
                    {this.state.displayData.map(el => {
                        return (
                            <Link to={"/HomePage/" + el[0]}>
                                <div class="grid-item">
                                    <ErrorBoundary>
                                        <StudentCard id={el[0]} name={el[1].name} marks={el[1].marks} />
                                    </ErrorBoundary>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        searchState: state
    })
}

export default connect(mapStateToProps)(AllCards);

