import { useEffect, useState } from "react";

export default function Test() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    console.log("타이머 시작");
    const id = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    // clean up
    // 하지않으면 함수가 계속 쌓이고 얘기지 못한 동작이 일어남
    // 되도록 지워주는게 좋음
    // 타이머가 누적이 되어서 점점 한번에 증가하는 수가 커짐
    return () => {
      console.log("타이머 정리");
      clearInterval(id);
    };
  }, [time]);

  return <h1>{time}초</h1>;
}
