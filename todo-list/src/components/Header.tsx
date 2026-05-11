import { memo } from "react";
import "./Header.css";
import WeatherCard from "./WeatherCard";

function Header() {
  console.log("Header 호출");

  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <div className="date-info">
        <h1>{new Date().toDateString()}</h1>
        <WeatherCard />
      </div>
    </div>
  );
}

export default memo(Header);
