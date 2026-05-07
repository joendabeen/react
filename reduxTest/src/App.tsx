import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store";
import Display from "./Display";
import CounterA from "./CounterA";
import CounterB from "./CounterB";

function App() {
  return (
    <Provider store={store}>
      <Display />
      <CounterA />
      <CounterB />
    </Provider>
  );
}

export default App;
