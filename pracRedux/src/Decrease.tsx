import { useDispatch } from "react-redux";
import { decrease } from "./counterSlice";

export default function Decrease() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(decrease())}>
      <h1>-</h1>
    </button>
  );
}
