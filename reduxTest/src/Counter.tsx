import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice";
import { changeName } from "./userSlice";
import type { RootState } from "./store";

export default function CounterA() {
  const count = useSelector((state: RootState) => state.counter.value);
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();

  // 함수 전달이 아닌 함수 호출을 해야 함
  return (
    <div>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase())}>
        <h1>+</h1>
      </button>
      <button onClick={() => dispatch(decrease())}>
        <h1>-</h1>
      </button>
      <button onClick={() => dispatch(changeName("박다라"))}>
        <h1>박다라</h1>
      </button>
      <button onClick={() => dispatch(changeName("김가나"))}>
        <h1>김가나</h1>
      </button>
    </div>
  );
}
