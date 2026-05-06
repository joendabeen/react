import { useContext, useRef, useState } from "react";
import "./TodoEditor.css";
import { TodoDispatchContext } from "../TodoContext";

export default function TodoEditor() {
  const [content, setContent] = useState<string>("");
  // DOM 접근
  const inputRef = useRef<HTMLInputElement>(null);

  const { onCreate } = useContext(TodoDispatchContext);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    console.log("2 TodoItem 업데이트");
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 한글 마지막 글자 두번 입력되는 이슈 해결
    // IME 관련 이슈
    // Enter가 이벤트 핸들러를 2번 호출 -> composing 중인 마지막 글자가 존재할 경우 return으로 중복 호출을 끊기
    // 참고 https://bobostown.tistory.com/2
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className="editor-wrapper">
        <input
          type="text"
          placeholder="새로운 Todo"
          onChange={onChangeContent}
          ref={inputRef}
          onKeyDown={onKeyDown}
          value={content}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}
