import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const [bookData, setBookData] = useState(null);
  const { ISBN } = useParams();

  useEffect(() => {
    axios
      .get(
        "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books/" +
          ISBN
      )
      .then((res) => {
        setBookData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-title">
          <h2>Book Detail</h2>
        </div>
        <div className="card-body"></div>

        {bookData && (
          <div>
            <h2>
              <img src={bookData.thumbnailUrl} />
            </h2>
            <h2>ชื่อหนังสือ : {bookData.title}</h2>
            <h5>เลขหนังสือ : {bookData.isbn}</h5>
            <h5>จำหนวนหน้า : {bookData.pageCount}</h5>
            <h5>คำอธิบาย : {bookData.longDescription}</h5>
            <br></br>
            <h5>ชื่อผู้แต่ง : {bookData.authors}</h5>
            <Link className="btn btn-danger" to="/">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
