import React, { Component } from "react";
import ErrorBoundary from "./errorBoundary.js";
import { connect } from "react-redux";
import { onClickCard } from "../store/actions";

class StudentCard extends Component {

    onClickHandler = (evt, id) => {

        this.props.onClickCard(id);
    }
    render() {
        return (
            <div className="card1" onClick={evt => this.onClickHandler(evt, this.props.id)}>
                <h3>Student Card</h3>
                <h3>{this.props.id}</h3>
                <h3>{this.props.name}</h3>
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