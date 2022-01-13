import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks();

    async function getBooks() {
      try {
        const response = await axios.get(
          "https://www.anapioficeandfire.com/api/books"
        );
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>BOOKS OF "SONG OF FIRE AND ICE":</p>
        {books.map((book, idBook) => (
          <div key={idBook}>
            <p>{book.name}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
