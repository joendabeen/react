import { useRef } from "react";

export default function UseRefTest() {
  // DOM 접근용
  const inputRef = useRef<HTMLInputElement>(null);
  // 필요없는 값 저장용
  const clickCountRef = useRef<number>(0);
  // 값이 필요할 때 여기에 초기화 선언하면 Rerendering될 때마다 0으로 할당되어서 원하는 값을 얻을 수 없음

  const handleClick = () => {
    // 'inputRef.current' is possibly 'null'.
    // 때문에 optional로 사용
    // optional : null 이면 자동으로 undefined 할당
    inputRef.current?.focus(); // CallByReference
    clickCountRef.current += 1; // CallByValue
    console.log(`클릭 횟수: ${clickCountRef.current}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="입력" />
      <button onClick={handleClick}>포커스 및 카운트 증가</button>
    </div>
  );
}
