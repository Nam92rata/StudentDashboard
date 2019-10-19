import React, { Component } from "react";
import { connect } from "react-redux";

class AnyOtherCard extends Component {

    render() {
        const id = this.props.match.param.id;
        return (
            <div className="card1">
                <h3>Anyother Card</h3>
                <h3>{id}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        searchState: state
    })
}

export default connect(mapStateToProps)(AnyOtherCard);

