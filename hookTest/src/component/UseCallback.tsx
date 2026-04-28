import { useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleClick = useCallback(() => {
    console.log("버튼 클릭");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}
