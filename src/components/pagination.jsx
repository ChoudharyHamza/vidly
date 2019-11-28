import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { totalMovie, pageLength, currentPage } = props;
  let pageCount = totalMovie / pageLength;
  pageCount = Math.ceil(pageCount);
  const pages = _.range(1, pageCount + 1);
  if (pages.length === 1) {
    return null;
  } else {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(page => {
            return (
              <li
                key={page}
                onClick={() => props.onPagination(page)}
                className={
                  currentPage === page ? "page-item active" : "page-item"
                }
              >
                <a className={"page-link"}>{page}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
};

export default Pagination;

Pagination.propTypes = {
  totalMovie: PropTypes.number.isRequired,
  pageLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
