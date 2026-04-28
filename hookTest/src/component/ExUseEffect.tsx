import { useEffect, useState } from "react";

export default function ExUseEffect() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `${count}번 클릭했습니다.`;
  }, [count]);
  // [count]: 의존성 배열
  // 의존성 배열이 빈 배열일 경우엔 최초 한 번(mount될 때 한 번)
  // 또는 배열이 변경될 때 첫번째 인자인 함수를 실행

  return (
    <div>
      <p>{count}번 클릭했습니다.</p>
      <button onClick={() => setCount((prev) => prev + 1)}>클릭</button>
    </div>
  );
}
