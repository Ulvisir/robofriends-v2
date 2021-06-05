import React from "react";

export const Card = (props) => {
  const { name, username, email } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{username}</p>
      <h4>{email}</h4>
    </div>
  );
};
