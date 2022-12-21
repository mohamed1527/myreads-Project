import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({ changeShelf, books, shelfTitle }) => {
    
  return (
      <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelfTitle}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books &&
                books.map((book) => (
                  <li key={book.id}>
                  <Book changeShelf={changeShelf} currentShelf={book.shelf} book={book}/>
                  </li>
                  ))}  
                </ol>
              </div>
            </div>
      </div>
  )

};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func,
  shelfTitle: PropTypes.string.isRequired,
}

export default BookShelf