import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    wrongData: false
  };

  checkLogin = async (username, password) => {
    const data = {
      username,
      password
    };
    try {
      const result = await axios.post("/api/v1/login", data);
      if (result.data.token) {
        this.props.history.push("/");
      }
    } catch (err) {
      const { data } = err.response;
      this.setState({ wrongData: data });
    }
  };

  onChangeInput = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value, wrongData: false });
  };

  render() {
    const { username, password, wrongData } = this.state;
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <div className="inputs">
            <input
              className="form-item"
              placeholder="Username goes here..."
              type="text"
              name="username"
              onChange={this.onChangeInput}
            />

            <input
              className="form-item"
              placeholder="Password goes here..."
              type="text"
              name="password"
              onChange={this.onChangeInput}
            />
            <button
              className="form-submit"
              onClick={() => this.checkLogin(username, password)}
            >
              Login
            </button>
            {wrongData ? <h5 className="alert">{wrongData}</h5> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
