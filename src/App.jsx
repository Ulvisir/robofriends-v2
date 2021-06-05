/**
 * Imports components
 */
import { Container } from "./components/Container";
import { AppTitle } from "./components/AppTitle";
import { Robots } from "./components/Robots";

/**
 * Imports styling
 */
import "animate.css";
import "./App.css";

/**
 *  Displays the component
 */
const App = () => {
  return (
    <Container>
      <AppTitle />
      <Robots />
    </Container>
  );
};

export default App;
