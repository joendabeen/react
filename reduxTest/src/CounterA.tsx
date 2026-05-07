import { useDispatch } from "react-redux";
import { increase } from "./actions";

export default function CounterA() {
  const dispatch = useDispatch();

  // 함수 전달이 아닌 함수 호출을 해야 함
  return (
    <div>
      <button onClick={() => dispatch(increase())}>
        <h1>+</h1>
      </button>
    </div>
  );
}
