import React, { Component } from "react";
import { connect } from "react-redux";
import { onClickCard } from "../store/actions";

class StudentCard extends Component {
    onClickHandler = (evt, id) => {
        this.props.onClickCard(id);
    }
    render() {
        let total = Object.entries(this.props.marks).reduce((acc, cur) => {
            return acc = parseInt(acc) + cur[1]
        }, 0)
        return (
            <div className="card1" onClick={evt => this.onClickHandler(evt, this.props.id)}>
                <h3>{this.props.name}</h3>
                <p>Roll No.:{this.props.id}</p>
                <p>Marks:{total}</p>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        searchState: state
    })
}

const mapActionToProps = {
    onClickCard: onClickCard,
}

export default connect(mapStateToProps, mapActionToProps)(StudentCard);