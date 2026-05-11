export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      <h1>Search Page</h1>
      <p>keyword: {q}</p>
    </div>
  );
}
