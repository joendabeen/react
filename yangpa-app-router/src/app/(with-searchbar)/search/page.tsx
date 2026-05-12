import SaleItem from "@/components/sale-item";
// import sales from "@/mock/sales.json";
import { ENV } from "@/env";
import { SaleType } from "@/types/saleType";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  let sales: SaleType[] = [];

  try {
    const { q } = await searchParams;
    let url = `${ENV.API_URL}/sales`;
    if (q) url += `?q=${q}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    sales = data.documents;
  } catch (error) {
    console.error("예외 발생", error);
    return <div>오류 발생</div>;
  }

  return (
    <div>
      {sales.map((sale) => (
        <SaleItem key={sale.id} {...sale} />
      ))}
    </div>
  );
}
