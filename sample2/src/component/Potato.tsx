import Hello from "./Hello";

interface PotatoProps {
  text: string;
  num: number;
  bool: boolean;
}

export default function Potato(props: PotatoProps) {
  return (
    <>
      <label htmlFor="potato">감자</label>
      <input
        type="text"
        id="potato"
        placeholder={props.text}
        value={props.bool ? props.num : ""}
      />
      <Hello />
    </>
  );
}
