import { Provider } from "react-redux";
import "./App.css";
import NameChanger from "./NameChanger";
import Counter from "./Counter";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <NameChanger />
    </Provider>
  );
}

export default App;
