import "./App.css";
import { useEffect, useState } from "react";
import SearchForBook from "./components/SearchForBooks";
import BookList from "./components/BookList";
import * as BooksAPI from './BooksAPI';
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {  
      (async () => {
        const res = await BooksAPI.getAll();
        setBooks(res); 
    })()
     }, [])

  const changeShelf = async (book, shelf) => {
  await BooksAPI.update(book, shelf).then(() => {
    book.shelf = shelf
    setBooks(books.filter(b => book.id !== b.id).concat(book))
  })
  }
   
  return (
    <Routes>
      <Route 
      exact
      path="/"
      element={<BookList books={books} changeShelf={changeShelf}
      />}
      />
      <Route 
      path="/search"
      element={
      <SearchForBook books={books} changeShelf={changeShelf}
      />}
      />
    </Routes>
  );
}

export default App;
