import style from "./page.module.css";
// import sales from "@/mock/sales.json";
import { ENV } from "@/env";
import { SaleType } from "@/types/saleType";

import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let sales: SaleType[] = [];

  try {
    const { id } = await params;
    // const { productName, description, price, photo } = sales.filter(
    //   (sale) => sale.id === Number(id),
    // )[0];
    const response = await fetch(`${ENV.API_URL}/sales/${id}`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    sales = data.documents;
  } catch (error) {
    console.error("예외 발생", error);
    return <div>오류 발생</div>;
  }

  const { productName, description, price, photo } = sales[0];
  const imageUrl = `${ENV.IMAGE_URL}/${photo}`;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <Image
          src={imageUrl}
          alt={`${productName}`}
          width={300}
          height={300}
          className={style.cover_img}
        />
      </div>
      <div className={style.title}>{productName}</div>
      <div className={style.price}>{price.toLocaleString()}원</div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
