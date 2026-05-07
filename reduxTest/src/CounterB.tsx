import { useDispatch } from "react-redux";
import { decrease } from "./store";

export default function CounterB() {
  const dispatch = useDispatch();

  // 함수 전달이 아닌 함수 호출을 해야 함
  return (
    <div>
      <button onClick={() => dispatch(decrease())}>
        <h1>-</h1>
      </button>
    </div>
  );
}
