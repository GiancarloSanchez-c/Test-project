import React from "react";
import '../assets/scss/Pagination.scss';

const Paginations = ({ quantityPerPage, all, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(all / quantityPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav className="pagination">
        <ul>
          {pageNumbers?.map((number) => (
            <li key={number}>
              <a className="number target" onClick={() => pagination(number)}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginations;
