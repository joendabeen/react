import style from "./sale-item.module.css";
import type { SaleType } from "@/types/saleType";
import { ENV } from "@/env";

import Image from "next/image";
import Link from "next/link";

export default function SaleItem({
  id,
  productName,
  description,
  price,
  photo,
}: SaleType) {
  const imageUrl = `${ENV.IMAGE_URL}/${photo}`;

  return (
    <Link href={`/sale/${id}`} className={style.container}>
      <Image
        src={imageUrl}
        alt={`${productName}의 사진`}
        width={100}
        height={100}
        className={style.image}
      />
      <div>
        <div className={style.title}>{productName}</div>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{price.toLocaleString()}원</div>
      </div>
    </Link>
  );
}
