"use client";

import style from "./searchbar.module.css";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [search, setSearch] = useState<string>(q || "");

  const pathname = usePathname();

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  // Hook을 컴포넌트 밖에서 호출하면
  // Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
  // 위와 같은 에러 발생
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") onSubmit();
  };

  useEffect(() => {
    if (pathname === "/") setSearch("");
  }, [pathname]);

  return (
    <div className={style.searchbar_container}>
      <input
        type="text"
        placeholder="검색어 입력"
        value={search}
        onChange={onChangeValue}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>클릭</button>
    </div>
  );
}
