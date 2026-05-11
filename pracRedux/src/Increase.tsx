import { useDispatch } from "react-redux";
import { increase } from "./counterSlice";

export default function Increase() {
  const dispatch = useDispatch();

  // 함수 전달이 아닌 함수 호출을 해야 함
  return (
    <button onClick={() => dispatch(increase())}>
      <h1>+</h1>
    </button>
  );
}
