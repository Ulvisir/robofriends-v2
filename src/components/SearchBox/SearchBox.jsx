import React from "react";

export const SearchBox = (props) => {
  const { onChange, value } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      type="search"
      placeholder="Search Robots"
    />
  );
};
