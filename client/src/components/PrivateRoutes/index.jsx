import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

class Private extends React.Component {
  state = { checking: true };

  componentWillMount() {
    axios
      .get("/api/v1/auth")
      .then(() => {
        this.setState({ login: true, checking: false });
      })
      .catch(error => {
        const { status } = error.response;
        if (status === 401) {
          this.setState({ login: false, checking: false });
        }
      });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <div>
        {this.state.checking ? (
          <Loading />
        ) : this.state.login ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default Private;
