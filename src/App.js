import GlobalState from "./contexts/GlobalState";
import { GlobalStyled } from "./GlobalStyle";
import Router from "./router/Router"


function App() {
  return (
    <GlobalState>
      <GlobalStyled/>
      <Router/>
    </GlobalState>
  );
}

export default App;
