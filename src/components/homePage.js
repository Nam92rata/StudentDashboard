import React, { Component } from "react";
import { connect } from "react-redux";
import { onSearch, logout } from "../store/actions";
import AnyOtherCard from "./AnyOtherCard.js";
import ClipLoader from 'react-spinners/ClipLoader';
import AllCards from './allCards';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import { Redirect } from "react-router";
import Axios from "axios";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
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

    onChangeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value }, () => {
            this.props.onSearch(this.state.studentName)
        })
    }

    componentDidMount() {
        Axios.get("https://api.myjson.com/bins/1dlper")
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    render() {
        if (localStorage.getItem('login')) {
            const nameArray = Object.entries(this.state.data).filter(el => {
                return el[1].name.includes(this.props.searchState.studentName)
            })
            if (this.state.data) {
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
                return <ClipLoader />
            }
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