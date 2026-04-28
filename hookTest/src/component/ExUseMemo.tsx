import { useMemo } from "react";

interface Props {
  num: number;
}

export default function ExUseMemo({ num }: Props) {
  const expensiveCalc = (n: number) => {
    console.log("비싼 계산 실행 중 ...");
    return num * 2;
  };

  // 의존성 배열 안의 값이 바뀌지 않으면 그 값을 다시 사용한다
  const memoizedValue = useMemo(() => expensiveCalc(num), [num]);

  return <div>결과: {memoizedValue}</div>;
}
