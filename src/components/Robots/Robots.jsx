import React from "react";

/**
 * Imports mock data
 */
import { robots } from "./Robots.mock";

/**
 * Imports components
 */
import { Card } from "../Card";

/**
 * Imports styling
 */
import "./Robots.css";

const Robots = () => {
  /**
   * Handles rendering the robots
   */
  const renderRobots = () => {
    return robots.map((robot) => {
      return <Card key={robot.id} {...robot} />;
    });
  };

  return <div className="container">{renderRobots()}</div>;
};

export { Robots };
