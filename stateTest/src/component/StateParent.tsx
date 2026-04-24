import { useState } from "react";
import StateCounter from "./StateCounter";
import ResetCounter from "./ResetCount";

export default function StateParent() {
  const [count, setCount] = useState<number>(0);
  const update = (step: number) =>
    setCount((prev) => {
      let result = prev + step;
      if (result < 0) result = 0;
      return result;
    });
  // 콜백 좀 더 많이 만들어볼 것
  const reset = () => setCount(0);

  return (
    <div>
      <p>총 개수: {count}</p>
      <StateCounter step={1} onUpdate={update} />
      <StateCounter step={5} onUpdate={update} />
      <StateCounter step={-1} onUpdate={update} />
      <ResetCounter onReset={reset} />
    </div>
  );
}
