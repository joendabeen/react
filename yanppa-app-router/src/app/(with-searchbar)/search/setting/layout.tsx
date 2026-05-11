export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>설정 전용 레이아웃</div>
      {children}
      <div>레이아웃 끝</div>
    </div>
  );
}
