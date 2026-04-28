import { useEffect, useState } from "react";
// interface에도 type 키워드 붙여야 함
// verbatimModuleSyntax (default는 false인 설정이지만 vite로 프로젝트를 빌드하면서 자동으로 true로 설정 됨)
// TS는 컴파일 되는 과정에서 타입으로만 사용되는 import문을 제거(elision)하거나 변경하는데
// 이 과정에서 런타임 환경과 불일치가 발생할 수 있음
// verbatimModuleSyntax 옵션을 true로 설정하면 import나 export를 변경하거나 제거하지 않고
// JS 출력물에 그대로 남김 대신 타입 전용(type-only)로 사용하는 import나 export에 type 키워드를 강제
import type { User } from "./UserList";

export default function UserList1() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("요청 실패");
        }
        const data: User[] = await res.json();
        setUsers(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    load();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
