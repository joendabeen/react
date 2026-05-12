import style from "./layout.module.css";

import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>🧅 양파마켓</Link> &nbsp;&nbsp;&nbsp;
          </header>
          <main>{children}</main>
          <footer>&copy; 2026 양파마켓 All right reserved</footer>
        </div>
      </body>
    </html>
  );
}
