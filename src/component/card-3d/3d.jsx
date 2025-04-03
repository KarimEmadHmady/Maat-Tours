import React from "react";
import "./3d.css";
import { ima3d } from "../../assets/Image";

const FuriosaPoster = () => {
  return (
    <div className="main-furiosa_poster">
      <article id="furiosa_poster">
        <div id="furiosa_poster__header">
          <h1 id="furiosa_poster__header__title" data-title="Ma'at Tours">
            Ma'at Tours
          </h1>
        </div>
        <p id="furiosa_poster__anya">Excursion</p>
        <p id="furiosa_poster__chris">Travel</p>
        <p id="furiosa_poster__george">
          {" "}
          <strong>An unforgettable trip</strong>
        </p>
        <img
          id="furiosa_poster__front_image"
          src={ima3d}
          alt="Furiosa Front image"
        />
      </article>
    </div>
  );
};

export default FuriosaPoster;
