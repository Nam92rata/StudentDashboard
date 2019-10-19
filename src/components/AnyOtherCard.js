import React, { Component } from "react";
import { connect } from "react-redux";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    LabelSeries
} from 'react-vis';

class AnyOtherCard extends Component {

    render() {
        // console.log(this.props.data)
        const objMarks = this.props.data.filter(el => {
            console.log(this.props.id, el[0])
            return el[0] === this.props.id
        })
        console.log("ABCD", new Array(objMarks[0][1].marks))
        var newArr = [];
        Object.entries(objMarks[0][1].marks).map(el => {
            var obj = {};
            obj.x = el[0];
            obj.y = el[1];
            newArr.push(obj)
        })
        console.log("ooo", newArr)
        return (
            <div className="card1">
                <h3>Marks Details</h3>
                <h3>ID:{this.props.id}</h3>
                {/* {Object.entries(objMarks[0][1].marks).map(el => { */}


                <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries className="vertical-bar-series-example" data={newArr} />

                    {/* <LabelSeries data={labelData} getLabel={d => d.x} /> */}
                </XYPlot>


                <button><Link to="/HomePage/">Back</Link></button>
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

