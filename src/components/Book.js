import PropTypes from "prop-types";

const BookItem = ({ book, changeShelf, currentShelf }) => {

  const handleShelfChange = (e) => {
    e.preventDefault();
    changeShelf(book, e.target.value)
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
            `url(${
              book.imageLinks ? book.imageLinks.thumbnail : "Image not Found"})`,
          }}
        ></div>
        <div className="book-shelf-changer">
        <select onChange={handleShelfChange}
          value={currentShelf}>
          <option value="change" disabled>
            Move to...
          </option>
          <option value='currentlyReading'>
          currentlyReading
          </option>
          <option value='wantToRead'>
          wantToRead
          </option>
          <option value='read'>
          read
          </option>
          <option value="none">None</option>
        </select>
      </div>
      </div>
      <div className="book-title">{book.title ? book.title : "Book Title not found"}</div>
      <div className="book-authors">{book.authors ? book.authors : 'Author not Available'}</div>
    </div>
              
 )
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func,
  currentShelf: PropTypes.string,
}

export default BookItem