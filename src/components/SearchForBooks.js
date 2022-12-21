import { useEffect, useState } from "react";
import * as BooksAPI from '../BooksAPI'; 
import Book from "./Book";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const SearchForBook = ({ books, changeShelf }) => {

    const [query, setQuery] = useState("");
    const [bookResult, setBookResult] = useState([]);
        const updateQuery = (query) =>{
        setQuery(query.trim());
    };
    const clearQuery = () =>{
      updateQuery("");
  }

    useEffect(() => {
      const searchForBooks = (query) => {
        if (query.length !== 0) {
          BooksAPI.search(query).then((bookResult) => {
            if (!bookResult.error) {
              setBookResult(bookResult);
            } else {
              setBookResult([]);
            }
          });
        } else {
          setBookResult([]);
        }
      };
      searchForBooks(query);
    }, [query, books]);
   
    return (
    <div className="search-books">
          <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
            
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />    
            </div>
            <button style={{textAlign:"center" ,fontSize:20 , border: 0 , backgroundColor: "#4CAF50"}} onClick={clearQuery}>Reset</button> 
          </div>
          
          <div className="search-books-results">
            <ol className="books-grid">
            {/* {
              <div className="showing-books">
              <span>Now Showing {bookResult.length}</span>     
              <button onClick={clearQuery}>Reset</button>    
              </div>  
              
        }
         */}
        {
             bookResult.length > 0
             && 
              bookResult?.filter(c => c.title.toLowerCase().includes(query.toLowerCase()))
              .map((searchedForBook) => (           
                <Book
                  key={searchedForBook.id}
                  book={searchedForBook}
                  changeShelf={changeShelf}
                />             
              )) 
              }
         
            </ol>
          </div>
        </div>
    )
};

SearchForBook.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func,
}

export default SearchForBook