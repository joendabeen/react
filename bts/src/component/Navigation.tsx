import "./Navigation.css";

interface NavigationProps {
  now: number;
  onChangeIndex: (now: number) => void;
}

export default function Navigation({ now, onChangeIndex }: NavigationProps) {
  const onMoveLeft = () => onChangeIndex(now - 1);
  const onMoveRight = () => onChangeIndex(now + 1);
  return (
    <div className="btn-container">
      <button className="left" onClick={onMoveLeft}>
        ←
      </button>
      <button className="right" onClick={onMoveRight}>
        →
      </button>
    </div>
  );
}
