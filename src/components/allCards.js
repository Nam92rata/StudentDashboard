import React, { Component } from "react";
import { connect } from "react-redux";
import StudentCard from "./StudentCard";
import ErrorBoundary from "./errorBoundary.js";
import { Link } from 'react-router-dom';

class AllCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayData: props.data,
            alphToggle: false,
            toggle: false
        }
    }

    toggleAlphabet = () => {
        this.setState({ alphToggle: !this.state.alphToggle }, () => { })
        var alphSortedArray = this.state.displayData.sort(function (a, b) {
            var nameA = a[1].name.toUpperCase();
            var nameB = b[1].name.toUpperCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        if (!this.state.alphToggle) {
            this.setState({ displayData: alphSortedArray });
        }
        else {
            this.setState({ displayData: alphSortedArray.reverse() });
        }

    }

    toggleMarks = () => {
        this.setState({ toggle: !this.state.toggle }, () => { })
        var marksSortedArray = [];
        if (this.state.toggle) {
            marksSortedArray = this.state.displayData.sort(function (a, b) {
                var marksA = Object.entries(a[1].marks).reduce((acc, cur) => {
                    return acc = parseInt(acc) + cur[1]
                }, 0);
                var marksB = Object.entries(b[1].marks).reduce((acc, cur) => {
                    return acc = parseInt(acc) + cur[1]
                }, 0);
                return Number(marksB) - Number(marksA)
            })
        }
        else {
            marksSortedArray = this.state.displayData.sort(function (a, b) {
                var marksA = Object.entries(a[1].marks).reduce((acc, cur) => {
                    return acc = parseInt(acc) + cur[1]
                }, 0);
                var marksB = Object.entries(b[1].marks).reduce((acc, cur) => {
                    return acc = parseInt(acc) + cur[1]
                }, 0);
                return Number(marksA) - Number(marksB)
            })

        }
        this.setState({ displayData: marksSortedArray });

    }

    render() {

        return (
            <div >
                <button className="button" onClick={this.toggleAlphabet}>Alphabet</button>
                <button className="button" onClick={this.toggleMarks}>Marks</button>
                <div className="grid-container">
                    {this.state.displayData.map(el => {
                        return (
                            <Link className="link" key={el[0]} to={"/HomePage/" + el[0]}>
                                <div className="grid-item">
                                    <ErrorBoundary>
                                        <StudentCard key={el[0]} id={el[0]} name={el[1].name} marks={el[1].marks} />
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

