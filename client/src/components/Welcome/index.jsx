import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import Cookie from "js-cookie";
import { withRouter } from "react-router-dom";
import Loading from "../Loading";

class Welcome extends Component {
  state = { loading: true, username: "", password: "" };

  componentDidMount() {
    axios
      .get("/api/v1/getUser")
      .then(userData => {
        const { username, password } = userData.data;
        this.setState({ loading: false, username, password });
      })
      .catch(err => {
        this.props.history.push("/login");
      });
  }

  logout = () => {
    Cookie.remove("jwt");
    this.props.history.push("/login");
  };

  render() {
    const { loading } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <div className="center">
        <div className="card">
          <h2> Welcome </h2> <hr />
          <h3>Your Username is: {this.state.username}</h3>
          <h3>Your Password is: {this.state.password}</h3>
          <button className="logout__Button" onClick={this.logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Welcome);
