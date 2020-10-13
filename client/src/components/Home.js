import Axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./Card";

export default function Home(props) {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    getBooks();
    console.log("Hello")
  }, []);
  const getBooks = () => {
    Axios.get("/books/home").then((res) => {
      setBookList(res.data);
    });
  };
  return (
    <div>
      {bookList.map((book) => (
        <BookCard
          key={book.BookName}
          name={book.BookName}
          about={book.Description.About}
          date = {book.Date}
        ></BookCard>
      ))}
    </div>
  );
}
