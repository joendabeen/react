export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </div>
  );
}
