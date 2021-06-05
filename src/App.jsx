import React, { useState } from "react";

/**
 * Imports mock data
 */
import { robots as robotsList } from "./components/Robots";

/**
 * Imports components
 */
import { Container } from "./components/Container";
import { AppTitle } from "./components/AppTitle";
import { Robots } from "./components/Robots";
import { SearchBox } from "./components/SearchBox";

/**
 * Imports styling
 */
import "animate.css";
import "./App.css";

/**
 *  Displays the component
 */
const App = () => {
  const [robots, setRobots] = useState(robotsList);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    const value = event.target.value;

    setSearch(value);
    const filteredRobots = robotsList.filter((robot) => {
      return robot.name.toLowerCase().includes(value.toLowerCase());
    });
    setRobots(filteredRobots);
  };
  return (
    <Container>
      <AppTitle />
      <SearchBox value={search} onChange={handleSearch} />
      <Robots robots={robots} />
    </Container>
  );
};

export default App;
