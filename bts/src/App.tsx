// import "./App.css";
// import type { Member } from "./types/member";
// import MemberCard from "./component/MemberCard";
import Member from "./component/Member";

// const members: Member[] = [
//   { image: "/bts/bts1.png", nick: "RM" },
//   { image: "/bts/bts2.png", nick: "진" },
//   { image: "/bts/bts3.png", nick: "슈가" },
//   { image: "/bts/bts4.png", nick: "제이홉" },
//   { image: "/bts/bts5.png", nick: "지민" },
//   { image: "/bts/bts6.png", nick: "뷔" },
//   { image: "/bts/bts7.png", nick: "정국" },
// ];

// function renderMember() {
//   const btsMemberTag = [];
//   for (const member of members) {
//     btsMemberTag.push(<MemberCard member={member} />);
//   }

//   return btsMemberTag;
// }

function App() {
  // return <div>{renderMember()}</div>;
  return <Member />;
}

export default App;
