import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

// 날짜 표시는 하루에 한번 일어나면 되는데 계속 Rerendering 되는 문제가 있음
// React.memo로 해결
export default React.memo(Header);
