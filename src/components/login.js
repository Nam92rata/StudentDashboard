import React, { Component } from 'react';
import { Redirect } from "react-router";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            login: false
        }
    }
    focus = () => {
        if (this.textInput) {
            this.textInput.focus();
        }
    }
    componentDidMount() {
        this.focus()
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onClickHandler = (e) => {
        localStorage.setItem("login", this.state.username);
        this.setState({ login: true })
    }

    render() {
        if (this.state.login || localStorage.getItem("login")) {
            return <Redirect to='/HomePage' />;
        } else {
            return (
                <div>
                    <form onSubmit={e => this.onClickHandler(e)}>
                        <div className="card2">
                            <h2 className="block2">Weather App</h2>
                            <div className="block2">Username : <input ref={(input) => { this.textInput = input; }} className="input" name={"username"} value={this.state.username} onChange={e => this.onChangeHandler(e)} /></div><br />
                            <div className="block2">Password : <input className="input" name={"password"} value={this.state.password} onChange={e => this.onChangeHandler(e)} /></div>
                            <div className="block2"><button className="button" type="submit" onClick={e => this.onClickHandler(e)}>Login</button></div>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Login;