import { useState, type ChangeEvent } from "react";

export default function LiveInput() {
  const [text, setText] = useState<string>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>실시간 입력</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="입력"
      />
      <p>
        입력한 내용: <strong>{text}</strong>
      </p>
    </div>
  );
}
