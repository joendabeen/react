import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store";
// import Display from "./Display";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      {/* <Display /> */}
      <Counter />
    </Provider>
  );
}

export default App;
