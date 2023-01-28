import GlobalState from "./contexts/GlobalState";
import Router from "./router/Router"


function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
