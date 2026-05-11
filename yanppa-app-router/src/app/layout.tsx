import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header>
          <Link href={"/"}>Home</Link> &nbsp;&nbsp;&nbsp;
          <Link href={"/search"}>Search</Link> &nbsp;&nbsp;&nbsp;
          <Link href={"/sale/1"}>1번 상품</Link> &nbsp;&nbsp;&nbsp;
        </header>
        {children}
      </body>
    </html>
  );
}
