import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const BookList = ({ books, changeShelf }) => {

  const bookShelves = [
    { shelfTitle: "Currently Reading", shelf: "currentlyReading" },
    { shelfTitle: "Want to Read", shelf: "wantToRead" },
    { shelfTitle: "Read", shelf: "read" }
  ];

  return <>
  <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        {bookShelves.map((bookshelf, index) => (
            <BookShelf
              key={index}
              shelfTitle={bookshelf.shelfTitle}
              books={
                books.filter(
                  book => book && book.shelf === bookshelf.shelf
                )
              }
              changeShelf={changeShelf}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
      </>
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func,
}

export default BookList