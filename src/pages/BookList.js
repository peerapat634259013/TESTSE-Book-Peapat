import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const BookList = () => {
  const [bookData, setBookData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books"
      )
      .then((res) => {
        setBookData(res.data);
      })
      //.catch((err) => {
      //  console.log(err);
      //});
  }, []);

  const loadEdit = (isbn) => {
    navigate("/book/edit/" + isbn);
  };
  const loadDetail = (isbn) => {
    navigate("/book/detail/" + isbn);
  };
  const removeBook = (isbn) => {
    if (window.confirm("คุณต้องการลบหนังสือเล่มนี้ใช่ไหม")) {
      axios
        .delete(
          "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books/" +
            isbn
        )
        .then((res) => {
          alert("ลบหนังสือสำเร็จ");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <center>
      <h1> Book Store </h1>
      <Link
        to="/book/create"
        className="btn btn-success"
      >
        NEW BOOK
      </Link>
      <div style={{ width: "100rem" }}>
        <Row md={4}>
          {bookData &&
            bookData.map((item) => {
              return (
                <Card key={item.isbn}>
                  <h5>ชื่อหนังสือ : {item.title}</h5>
                  <img src={item.thumbnailUrl}></img>
                  <h8>ผู้แต่ง : {item.authors}</h8>
                  <h8>หมวดหมู่ : {item.categories}</h8>
                    <td>
                    <a
                      className="btn btn-primary"
                      onClick={() => {
                        loadEdit(item.isbn);
                      }}
                    >
                      Edit
                    </a>{" "}

                    <a
                      className="btn btn-danger"
                      onClick={() => {
                        removeBook(item.isbn);
                      }}
                    >
                      Delete
                    </a>{" "}
                      
                    <a
                      className="btn btn-success"
                      onClick={() => {
                        loadDetail(item.isbn);
                      }}
                    >
                      Detail More...
                    </a>

                  </td>
                </Card>
              );
            })}
        </Row>
      </div>
    </center>
  );
};
export default BookList;
