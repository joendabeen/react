import { useMemo, useState } from "react";

export default function UseMemoTest() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const list = ["apple", "banana", "grape", "orange"];

  console.log(query);

  // Rerendering 될 때 query 변경이 없으면 실행되지 않음
  const filtered = useMemo(() => {
    console.log("필터 실행됨");
    return list.filter((item) => item.includes(query));
  }, [query]);

  return (
    <div>
      <h3>검색</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="입력"
      />
      <h3>관계 없는 상태 변경</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count 증가 ({count})
      </button>
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
