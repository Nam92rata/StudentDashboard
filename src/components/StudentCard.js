import React, { Component } from "react";
import ErrorBoundary from "./errorBoundary.js";
import { connect } from "react-redux";
import { onClickCard } from "../store/actions";

class StudentCard extends Component {

    onClickHandler = (evt, id) => {

        this.props.onClickCard(id);
    }
    render() {
        let total = Object.entries(this.props.marks).reduce((acc, cur) => {
            console.log(cur[1])
            return acc = parseInt(acc) + cur[1]
        }, 0)
        return (
            <div className="card1" onClick={evt => this.onClickHandler(evt, this.props.id)}>
                <h3>{this.props.name}</h3>
                <h4>ID:{this.props.id}</h4>
                <h4>Marks:{total}</h4>
            </div >
        )


    }
}

const mapStateToProps = (state) => {
    console.log("statein Card", state);
    return ({
        searchState: state
    })
}

const mapActionToProps = {
    onClickCard: onClickCard,
}

export default connect(mapStateToProps, mapActionToProps)(StudentCard);