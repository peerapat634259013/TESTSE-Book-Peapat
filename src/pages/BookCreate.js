import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BookCreate = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [pageCount, setpageCount] = useState("");
  const [publishedDate, setpublishedDate] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [status, setStatus] = useState("");
  const [authors, setAthors] = useState("");
  const [categories, setCategories] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books",
        {
          title,
          isbn,
          pageCount,
          publishedDate,
          thumbnailUrl,
          shortDescription,
          longDescription,
          status,
          authors,
          categories,
        }
      )
      .then()
      .then((res) => {
        alert("Save Successfully");
        navigate("/");
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card-title">
              <h1>Create Book</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>เลขหนังสือ</label>
                    <input
                      value={isbn}
                      className="form-control"
                      onChange={(e) => {
                        setIsbn(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ชื่อหนังสือ</label>
                    <input
                      value={title}
                      className="form-control"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>จำนนหน้าทั้งหมด</label>
                    <input
                      value={pageCount}
                      className="form-control"
                      onChange={(e) => {
                        setpageCount(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>วันที่ตีพิมพ์</label>
                    <input
                      value={publishedDate}
                      className="form-control"
                      onChange={(e) => {
                        setpublishedDate(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ลิ้งรูปภาพ</label>
                    <input
                      value={thumbnailUrl}
                      className="form-control"
                      onChange={(e) => {
                        setThumbnailUrl(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>คำอธิบายแบบสั้น</label>
                    <input
                      value={shortDescription}
                      className="form-control"
                      onChange={(e) => {
                        setShortDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>คำอธิบายแบบเต็ม</label>
                    <input
                      value={longDescription}
                      className="form-control"
                      onChange={(e) => {
                        setLongDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>สถานะหนังสือ</label>
                    <input
                      value={status}
                      className="form-control"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>รายชื่อผู้แต่ง</label>
                    <input
                      value={authors}
                      className="form-control"
                      onChange={(e) => {
                        setAthors(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ประเภทหนังสือ</label>
                    <input
                      value={categories}
                      className="form-control"
                      onChange={(e) => {
                        setCategories(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    {" "}
                    <br></br>
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>{" "}
                    <Link to="/" className="btn btn-danger">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookCreate;
