/**
 * Imports components
 */
import { Container } from "./components/Container";
import { AppTitle } from "./components/AppTitle";

/**
 * Imports styling
 */
import "./App.css";

/**
 *  Displays the component
 */
const App = () => {
  return (
    <Container>
      <AppTitle />
    </Container>
  );
};

export default App;
