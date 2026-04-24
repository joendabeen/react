import "./MemberCard.css";
import type { TMember } from "../types/member";

interface MemberCardProps {
  member: TMember;
}

// unboxing 두 번
export default function MemberCard({ member }: MemberCardProps) {
  const { image, nick } = member;
  return (
    <>
      <div className="member-card">
        <img src={image} alt={nick} />
        <h1>{nick}</h1>
        <h3>BTS</h3>
      </div>
    </>
  );
}
