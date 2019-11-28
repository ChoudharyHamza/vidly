// so the target is to build a table

import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./like";
import Paginaiton from "./pagination";
import Header1 from "./TR";
import { PaginationAlgo } from "../utils/PaginationAlgo";
import ListGroup from "./listGroup";

export default class Table1 extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
      pageLength: 4,
      currentPage: 1,
      genres: getGenres(),
      sortByGenre: "False",
      genreSorted: []
    };
  }

  findItem(e) {
    let movie = e.target.parentNode.parentNode;

    let movi = this.state.movies.filter(m => m._id !== movie.id);
    this.setState({ movies: movi });
  }

  IconChangeHandeler = movie => {
    let uni = this.state.movies;
    const index = uni.indexOf(movie);
    uni[index] = movie;
    uni[index].like = uni[index].like === "True" ? "False" : "True";
    this.setState({ movies: uni });
  };

  PaginaitonHandeler = page => {
    this.setState({ currentPage: page });
    this.setState({ sortByGenre: "False" });
  };

  genreHandeler = (genre, movies) => {
    const newArr = movies.filter(movie => genre === movie.genre.name);
    console.log(newArr);
    this.setState({ genreSorted: newArr });
    this.setState({ sortByGenre: "True" });
  };

  ArrayToRender() {
    const arrayToRender = PaginationAlgo(
      this.state.movies,
      this.state.pageLength,
      this.state.currentPage
    );
    this.setState({ arrayToRender });
  }

  AllGenreHandeler = () => {
    this.setState({ sortByGenre: "False" });
  };

  render() {
    const { movies, pageLength, currentPage } = this.state;
    const lengthOfArray = movies.length;
    let arrayToRender;

    if (this.state.sortByGenre !== "True") {
      arrayToRender = PaginationAlgo(movies, pageLength, currentPage);
    } else {
      arrayToRender = this.state.genreSorted;
    }

    if (this.state.movies.length !== 0) {
      return (
        <div className="row">
          <div className="col-2">
            <ListGroup
              onAllGenre={this.AllGenreHandeler}
              genres={this.state.genres}
              onGenreChange={this.genreHandeler}
              movies={movies}
            />
          </div>
          <div className="col">
            <Header1 total={lengthOfArray} />
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th>Icon</th>
                  <th>Button</th>
                </tr>
              </thead>
              <tbody>
                {arrayToRender.map(movi => (
                  <tr key={movi._id} id={movi._id}>
                    <td>{movi.title}</td>
                    <td>{movi.genre.name}</td>
                    <td>{movi.numberInStock}</td>
                    <td>{movi.dailyRentalRate}</td>

                    <Like
                      movie={movi}
                      onIconChange={this.IconChangeHandeler}
                    />

                    <td>
                      <button
                        onClick={this.findItem.bind(this)}
                        type="button"
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Paginaiton
              onPagination={this.PaginaitonHandeler}
              pageLength={pageLength}
              totalMovie={lengthOfArray}
              currentPage={currentPage}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header1 total={lengthOfArray} />
        </div>
      );
    }
  }
}
