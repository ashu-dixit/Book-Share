import Axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./Card";

export default function MyBooks() {
  const [bookList, setbookList] = useState([])
  useEffect(() => {
    getBooks()
  },[]);
  const getBooks = () => {
    Axios.get("/books").then((res) => {
      setbookList(res.data)
    });
  };

  return (
    <div>
      {
        bookList.map(book => (
          <BookCard key = {book.BookName} name = {book.BookName} about = {book.Description.About}></BookCard>
        ))
      }
    </div>
  );
}
  