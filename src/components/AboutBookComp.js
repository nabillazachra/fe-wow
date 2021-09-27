import React, { useState, useEffect } from "react";
import books from "../data/bookData";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import { BsBookmark } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

export default function AboutBookComp() {
  const [data, setData] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    if (books.length > 0) {
      const book = books.find((item) => item.id === parseInt(id));
      setData(book);
    }
  }, [id]);
  let history = useHistory();

  const handleReadBook = () => {
    history.push("/read-book");
  };

  return (
    <>
      <div className="mb-5">
        <h2 className="mb-3">About This Book</h2>
        <p className="text-muted text-wrap">{data?.about}</p>
        <div className="text-end mt-5">
          <button className="btn-reg auto me-2">
            Add My List <BsBookmark />
          </button>
          <button className="btn-secondary auto" onClick={handleReadBook}>
            Read Book <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
  );
}
