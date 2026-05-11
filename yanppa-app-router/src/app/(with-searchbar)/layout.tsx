export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <input type="text" placeholder="검색어 입력" />
      {children}
    </div>
  );
}
