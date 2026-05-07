import { useSelector } from "react-redux";

export default function Display() {
  // Store에 있는 원하는 상태를 가져오는 hook?
  const count = useSelector((state: { value: number }) => state.value);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
