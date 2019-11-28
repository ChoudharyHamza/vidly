import React, { Component } from "react";

export default class Header1 extends Component {
  render() {
    const con = this.show();
    return con;
  }

  show() {
    if (this.props.total === 0) {
      return <span>there are no movies in the Database</span>;
    } else {
      return <span>Showing {this.props.total} Movies in Database </span>;
    }
  }
}
