import { useRef } from "react";

export default function StateFormUC() {
  const name: any = useRef(null);
  const age: any = useRef(null);

  const show = () => {
    console.log(`안녕하세요, ${name.current.value}(${age.current.value}세)님!`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">이름: </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={name}
          defaultValue="김가나"
        />
      </div>
      <div>
        <label htmlFor="age">나이: </label>
        <input type="number" id="age" name="age" ref={age} defaultValue="18" />
      </div>
      <div>
        <button type="button" onClick={show}>
          보내기
        </button>
      </div>
    </form>
  );
}
