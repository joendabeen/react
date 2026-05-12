// "use client";
// 클라이언트 컴포넌트면 빠르고
// 서버 컴포넌트면 느림...

import SaleItem from "@/components/sale-item";
// import sales from "@/mock/sales.json";
import { ENV } from "@/env";
import type { SaleType } from "@/types/saleType";

export default async function Home() {
  // app router는 기본적으로 서버 컴포넌트이기 때문에 브라우저 레이어에서 작동하는 것들을 사용하지 못함
  // 상단에 'use client';라고 작성해주면 클라이언트 컴포넌트로 변경할 수 있음
  // 주의! 서버 컴포넌트를 클라이언트 컴포넌트 안에 넣으면 자동으로 클라이언트 컴포넌트로 바뀜

  // 캐싱으로 서버 컴포넌트 느린 문제 해결 가능한 듯
  let sales: SaleType[] = [];

  try {
    const response = await fetch(`${ENV.API_URL}/sales/recent`, {
      next: { revalidate: 10 },
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    sales = data.documents;
  } catch (error) {
    console.error("예외 발생", error);
    return <div>오류 발생</div>;
  }

  return (
    <div>
      <h2>최신 등록 상품</h2>
      {sales.map((sale) => (
        <SaleItem key={sale.id} {...sale} />
      ))}
    </div>
  );
}
