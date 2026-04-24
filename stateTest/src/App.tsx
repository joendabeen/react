import "./App.css";

import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import LiveInput from "./component/LiveInput";
import Parent from "./component/Parent";
import StateParent from "./component/StateParent";

function App() {
  return (
    <>
      <StateParent />
      <Parent />
      <LiveInput />
      <Counter init={0} />
      <ClassCounter init={0} />
    </>
  );
}

export default App;
