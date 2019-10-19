import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import { onSearch, logout } from "../store/actions";
import StudentCard from "./StudentCard.js";
import AnyOtherCard from "./AnyOtherCard.js";
import ErrorBoundary from "./errorBoundary.js";
import AboutUs from "./aboutUs";
import ClipLoader from 'react-spinners/ClipLoader';
import createHistory from 'history/createBrowserHistory';
import AllCards from './allCards';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Redirect } from "react-router";
import Axios from "axios";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            studentName: "",
            loading: false,
            show: false,
            logout: false,
            id: ""
        }
    }

    logoutHandler = () => {
        localStorage.removeItem('login');
        this.setState({ logout: true, loading: false });
        this.props.logout();
    }

    showHandler = () => {
        this.setState({ show: true });
    }

    hideHandler = () => {
        this.setState({ show: false });
    }

    onChangeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value }, () => {
            this.props.onSearch(this.state.studentName)
        })
    }


    componentWillReceiveProps(nextProps) {
        console.log("id", this.props.searchState.id)
        if (this.props.searchState.id !== nextProps.searchState.id) {
            this.setState({ id: !this.props.searchState.id })
        }
    }

    componentDidMount() {
        Axios.get("https://api.myjson.com/bins/1dlper")
            .then(res => {

                this.setState({ data: res.data }, () => {
                    console.log("res", this.state.data);
                });
            })
    }



    render() {
        if (localStorage.getItem('login')) {
            const nameArray = Object.entries(this.state.data).filter(el => {
                return el[1].name.includes(this.props.searchState.studentName)
            })
            let id = this.state.id;
            return (
                <div className="MainPage">
                    <div className="HomePage" >
                        <h1>All Sudents Details</h1>
                        <h3>Enter Students Name</h3>
                        <input className="input" name="studentName" value={this.state.studentName} onChange={evt => this.onChangeHandler(evt)} />

                        <BrowserRouter>
                            <div className="App">
                                <Link to="/HomePage"></Link>
                                <Route exact path='/HomePage' component={() => <AllCards data={nameArray} />}></Route>
                                <Route path='/HomePage/:id' component={() => <AnyOtherCard data={nameArray} id={this.props.searchState.id} />}></Route >

                            </div>
                        </BrowserRouter>
                        <button className="button" onClick={this.logoutHandler}>Logout</button>
                    </div>
                </div >
            )
        } else {
            return <Redirect to='/' />;
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        searchState: state
    })
}

const mapActionToProps = {
    onSearch: onSearch,
    logout: logout
}

export default connect(mapStateToProps, mapActionToProps)(HomePage);