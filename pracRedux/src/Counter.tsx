import { useSelector } from "react-redux";
import type { RootState } from "./store";
import Increase from "./Increase";
import Decrease from "./Decrease";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h1>{count}</h1>
      <Increase />
      <Decrease />
    </div>
  );
}
