import SearchBarLayout from "@/components/searchbar-layout";
import { ReactNode } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchSales } from "@/util/fetch-sales";
import SaleItem from "@/components/sale-item";
import { SaleData } from "@/types";

// 레이어 구분 잘 하기
// 이 부분 정리
// 웹서버에서 돌아가기 때문에 useRouter를 사용하지 못함
// Hook에 대해 정리하기
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const q = context.query.q;
  // string만 올거라고 형을 바꿔주는 것
  // Promise 복습
  const sales = await fetchSales(q as string);
  return { props: { sales } };
}

export default function Page({
  sales,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {sales.map((sale) => (
        <SaleItem key={sale.id} {...sale} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => <SearchBarLayout>{page}</SearchBarLayout>;
