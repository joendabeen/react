import { memo, useEffect, useState } from "react";
import "./WeatherCard.css";

// type WeatherData = {
//   description: string;
//   icon: string;
//   temp: number;
// };

type WeatherData = {
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
};

function WeatherCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

  // useEffect(() => {
  // fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lat=37.46&lon=126.90&lang=KR`,
  // )
  //   .then((res) => res.json())
  //   .catch((e) => console.error(e))
  //   .then((data) => {
  //     if (!data) {
  //       throw new Error("data 없음");
  //     }

  // const { description, icon } = data.weather[0];
  // const { temp } = data.main;
  // setWeather({ description, icon, temp });
  //   })
  //   .catch((e) => console.error(e));

  // const fetchData = async () => {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=seoul&lang=KR`,
  //   );
  //   const data = await response.json();
  //   setWeather(data);
  // };

  // fetchData();
  // }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lat=${lat}&lon=${lon}&lang=KR`,
        );
        const data = await response.json();
        setWeather(data);
      },
      (error) => {
        console.error(error);
      },
    );
  }, []);

  if (!weather) {
    return <div>날씨 불러오기 실패</div>;
  }

  const { icon, description } = weather.weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  const temp = weather.main.temp.toFixed(1);

  return (
    <div className="weather-card">
      <img src={iconUrl} alt={description} />
      <p>
        {description} | {`${temp}℃`}
      </p>
    </div>
  );
}

export default memo(WeatherCard);
