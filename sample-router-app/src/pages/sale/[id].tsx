import style from "./[id].module.css";
// import sales from "@/mock/sales.json";
import { fetchSaleById } from "@/util/fetch-sales";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // id가 항상 보내질거라는 것을 알기 때문에 ?가 아닌 !를 사용
  // Non-null assertion operator
  const id = context.params!.id;

  // 안돼서 다시 해봐야함
  if (Number.isNaN(id)) {
    notFound();
  }

  const sale = (await fetchSaleById(Number(id)))[0];
  return { props: { sale } };
}

export default function Page({
  sale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
