import "./MemberCard.css";
import { useState } from "react";

import type { Member } from "../types/member";
import Navigation from "./Navigation";

const members: Member[] = [
  { image: "/bts/bts1.png", nick: "RM" },
  { image: "/bts/bts2.png", nick: "진" },
  { image: "/bts/bts3.png", nick: "슈가" },
  { image: "/bts/bts4.png", nick: "제이홉" },
  { image: "/bts/bts5.png", nick: "지민" },
  { image: "/bts/bts6.png", nick: "뷔" },
  { image: "/bts/bts7.png", nick: "정국" },
];

export default function Member() {
  const [index, setIndex] = useState<number>(0);
  const len = members.length;
  const changeIndex = (now: number): void => {
    // 자바스크립트는 신기하게도 음수n % 양수 연산을 하면 결과가 음수인 n이 나옴
    setIndex((now + len) % len);
  };

  return (
    <>
      <div>
        <div className="member-card">
          <img src={members[index].image} alt={members[index].nick} />
          <h1>{members[index].nick}</h1>
          <h3>BTS</h3>
        </div>
        <Navigation now={index} onChangeIndex={changeIndex} />
      </div>
    </>
  );
}
