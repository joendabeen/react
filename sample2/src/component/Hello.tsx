// component는 html tag와 구분하기 위해서 대문자로

// 보통 JSX 파일은 하나의 컴포넌트만 export해서 사용
// 따라서 export default
export default function Hello() {
  return (
    <>
      <h1>안녕하세요.</h1>
      <h1>Hello World!</h1>
    </>
  );
}
