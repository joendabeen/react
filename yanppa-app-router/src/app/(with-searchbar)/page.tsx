"use client";

export default function Home() {
  console.log("인덱스 페이지 컴포넌트");

  // app router는 기본적으로 서버 컴포넌트이기 때문에 브라우저 레이어에서 작동하는 것들을 사용하지 못함
  // 상단에 'use client';라고 작성해주면 클라이언트 컴포넌트로 변경할 수 있음
  // 주의! 서버 컴포넌트를 클라이언트 컴포넌트 안에 넣으면 자동으로 클라이언트 컴포넌트로 바뀜
  return (
    <div>
      <h1>Index Page</h1>
      <button onClick={() => console.log("클릭")}>클릭</button>
    </div>
  );
}
