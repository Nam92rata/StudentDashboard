import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries
} from 'react-vis';

class AnyOtherCard extends Component {
    render() {
        const objMarks = this.props.data.filter(el => {
            return el[0] === this.props.id
        })
        var newArr = [];
        Object.entries(objMarks[0][1].marks).map(el => {
            var obj = {};
            obj.x = el[0];
            obj.y = el[1];
            newArr.push(obj)
            return newArr;
        })
        return (
            <div className="card2">
                <h3>Marks Details</h3>
                <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries className="vertical-bar-series-example" data={newArr} />
                </XYPlot>
                <Link to="/HomePage/"><button className="button">Back</button></Link>
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

