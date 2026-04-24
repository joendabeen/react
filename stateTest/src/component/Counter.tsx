import { useState } from "react";

interface CounterProps {
  init: number;
}

export default function Counter({ init }: CounterProps) {
  const [count, setCount] = useState<number>(init);
  const handleClick = (): void => {
    // setCount(count + 1);
    // 이전 상태값을 안전하게 참조하기 위해서 함수형 업데이트 사용 권장
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>클릭 카운터</h1>
      <p>현재 클릭 수: {count}</p>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
