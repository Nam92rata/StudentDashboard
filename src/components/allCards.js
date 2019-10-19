import React, { Component } from "react";
import { connect } from "react-redux";
import StudentCard from "./StudentCard";

class AllCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayData: props.data.sort()
        }
    }

    toggleAlphabet = () => {

        let reversedArray = this.state.displayData.reverse();

        this.setState({ displayData: reversedArray });
    }

    toggleMarks = () => {

    }
    render() {

        return (
            <div >
                <button className="button" onClick={this.toggleAlphabet}>Alphabet</button>
                <button className="button" onClick={this.toggleMarks}>Marks</button>
                <div class="grid-container">
                    {this.state.displayData.map(el => {
                        return (
                            <div class="grid-item"><StudentCard id={el[0]} name={el[1].name} /></div>
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

