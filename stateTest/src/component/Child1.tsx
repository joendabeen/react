import { type ChangeEvent } from "react";

interface Child1Props {
  onInputChange: (value: string) => void;
}

export default function Child1({ onInputChange }: Child1Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="입력" />
    </div>
  );
}
