import style from "./[id].module.css";
// import sales from "@/mock/sales.json";
import { fetchSaleById, fetchSales } from "@/util/fetch-sales";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";

export async function getStaticPaths() {
  const sales = await fetchSales();
  const idArr = sales.map((sale) => ({ params: { id: String(sale.id) } }));

  return {
    paths:
      // 문자열이어야 함
      // { params: { id: "1" } },
      // { params: { id: "2" } },
      // { params: { id: "3" } },
      idArr,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // id가 항상 보내질거라는 것을 알기 때문에 ?가 아닌 !를 사용
  // Non-null assertion operator
  const id = context.params!.id;
  const sale = (await fetchSaleById(Number(id)))[0];
  return { props: { sale }, revalidate: 10 }; // Incremental Static Regeneration (ISR) 증분 정적페이지 재생성
}

export default function Page({
  sale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!sale) return <div>문제 발생</div>;

  const { productName, description, price, photo } = sale;
  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${photo}`;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <Image
          src={imageUrl}
          alt={`${productName}의 사진`}
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
