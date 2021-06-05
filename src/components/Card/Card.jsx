import React from "react";

/**
 * Imports styling
 */
import "./Card.css";

/**
 * Displays the component
 */
export const Card = (props) => {
  const { name, username, email } = props;
  return (
    <div className="card animate__animated animate__zoomIn">
      <h2>{name}</h2>
      <p>{username}</p>
      <h4>{email}</h4>
    </div>
  );
};
