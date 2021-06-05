import React from "react";

/**
 * Imports styling
 */
import "./Card.css";

/**
 * Displays the component
 */
export const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="card animate__animated animate__zoomIn">
      <img
        className="robot-image"
        alt="robotphotos"
        src={`https://robohash.org/${id}?200x200`}
      />
      <div className="info-container">
        <h2 className="name">{name}</h2>
        <h4 className="email">{email}</h4>
      </div>
    </div>
  );
};
