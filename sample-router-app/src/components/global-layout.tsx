import style from "./global-layout.module.css";

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <header>
        <Link href={"/"}>🧅 양파마켓</Link>
      </header>
      <main>{children}</main>
      <footer>양파마켓: 000-0000-0000</footer>
    </div>
  );
}
