import React from "react";
import { robots } from "./Robots.mock";
import { Card } from "../Card";

const Robots = () => {
  return robots.map((robot) => {
    return <Card key={robot.id} {...robot} />;
  });
};

export { Robots };
