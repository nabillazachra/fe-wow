import React from "react";
import Wow from "../assets/img/Icon.png";
import Zayn from "../assets/img/zayn.png";

export default function SideProfile() {
  return (
    <>
      <div className="text-center">
        <a href="/home">
          <img src={Wow} className="wow rotate" alt="home" />
        </a>
      </div>
      <div className="text-center">
        <img src={Zayn} className="ava" alt="avatar" />
      </div>
      <div className="d-flex flex-column mt-3">
        <h5 className="text-center fw-bold mb-2">Egi Ganteng</h5>
        <h6 className="text-center text-danger">Not Subscribed Yet</h6>
      </div>
    </>
  );
}
