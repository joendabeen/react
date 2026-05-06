// import "./App.css";

import { useState } from "react";
import { Child, ChildWithMemo } from "./component/Child";

// import StateFormUC from "./component/StateFormUC";
// import StateForm from "./component/StateForm";

// import Hello from "./component/Hello";
// import Potato from "./component/Potato";
// import Welcome from "./component/Welcome";
// import SayHello from "./component/SayHello";
// import Library from "./component/Library";
// import EventBasic from "./component/EventBasic";
// import LoginControl from "./component/LoginControl";
// import CardList from "./component/CardList";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      {/* <Hello />    
      <SayHello myName="김가나" to="Gana" />
      <Potato text="감자감자감자" num={1} bool={true} />
      <Welcome name="김가나" />
      <Welcome name="박다라" /> */}
      {/* <Library /> */}
      {/* <EventBasic type="all" /> */}
      {/* <LoginControl /> */}
      {/* <CardList /> */}
      {/* <StateForm /> */}
      {/* <StateFormUC /> */}
      <div>
        <Child value={count} />
        <ChildWithMemo value={count} />
        <button onClick={() => setCount(count + 1)}>count 증가</button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
