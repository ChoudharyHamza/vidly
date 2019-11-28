import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
class Like extends Component {
  render() {
    const { movie, onIconChange } = this.props;
    let lik;

    movie.like === "True" ? (lik = "fas") : (lik = "far");

    return (
      <td>
        <FontAwesomeIcon
          onClick={() => onIconChange(movie)}
          icon={[lik, "heart"]}
          style={{ cursor: "pointer" }}
        />
      </td>
    );
  }
}

// checking type
Like.propTypes = {
  movie: PropTypes.object.isRequired,
  onIconChange: PropTypes.func.isRequired
};

export default Like;
