import Axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./Card";

export default function MyBooks() {
  const [bookList, setbookList] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = () => {
    Axios.get("/books").then((res) => {
      const parsed = JSON.stringify(res.data)
      
      setbookList(res.data);
      console.log(parsed + "Description");
    });
  };

  return (
    <div>
      {bookList.map((book) => (
        <BookCard
          key={book.BookName}
          name={book.BookName}
          about={book.Description.About}
          publishdate={book.Description.PublishDate}
          publisher={book.Description.Publisher}
          author={book.Description.Author}
          price={book.Price}
          // picture={book.Picture.data.toString('base64')}
        />
      ))}
    </div>
  );
}
