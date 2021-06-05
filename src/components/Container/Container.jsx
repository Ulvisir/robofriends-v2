import React from "react";

/**
Displays the component
 */

export const Container = (props) => {
  const { children } = props;
  return <h1>{children}</h1>;
};
