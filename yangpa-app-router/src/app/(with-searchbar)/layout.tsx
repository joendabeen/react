// import style from "./layout.module.css";

import SearchBar from "@/components/searchbar";

// import { ChangeEvent, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  // const [query, setQuery] = useState<string>("");
  // const router = useRouter();
  // const searchParams = useSearchParams();

  // const onChangeValue = (event: ChangeEvent<HTMLInputElement>) =>
  //   setQuery(event.target.value);

  // Hook을 컴포넌트 밖에서 호출하면
  // Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
  // 위와 같은 에러 발생
  // const q = searchParams.get("q");

  // const onSubmit = () => {
  //   if (!query || q === query) return;
  //   router.push(`/search?q=${query}`);
  // };

  return (
    <div>
      {/* <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="검색어 입력"
          value={query}
          onChange={onChangeValue}
        />
        <button onClick={onSubmit}>클릭</button>
      </div> */}
      <SearchBar />
      {children}
    </div>
  );
}
