import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { changeName } from "./userSlice";

export default function NameChanger() {
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => dispatch(changeName("박다라"))}>
        <h1>박다라</h1>
      </button>
      <button onClick={() => dispatch(changeName("김가나"))}>
        <h1>김가나</h1>
      </button>
    </div>
  );
}
