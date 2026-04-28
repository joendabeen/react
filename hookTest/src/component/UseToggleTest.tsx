import { useToggle } from "./useToggle";

export default function UseToggleTest() {
  const { value, toggle } = useToggle();

  return (
    <div>
      <p>{value ? "ON" : "OFF"}</p>
      <button onClick={toggle}>toggle</button>
    </div>
  );
}
