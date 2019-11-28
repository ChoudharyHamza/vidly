import React, { Component } from "react";
class ListGroup extends Component {
  render() {
    return (
      <ul className="list-group">
        <li
          className="list-group-item"
          style={{ cursor: "pointer" }}
          onClick={this.props.onAllGenre}
        >
          All Genre
        </li>
        {this.props.genres.map(genre => {
          return (
            <li
              key={genre._id}
              onClick={() =>
                this.props.onGenreChange(genre.name, this.props.movies)
              }
              className="list-group-item"
              style={{ cursor: "pointer" }}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListGroup;
