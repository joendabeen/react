import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

export function Header() {
  return (
    <>
      <Link to="/">
        <h1>Header</h1>
      </Link>
    </>
  );
}

export function Main() {
  return (
    <>
      <h3>Main</h3>
      <Link to="/product/1">
        <li>1번 상품</li>
      </Link>
      <Link to="/product/2">
        <li>2번 상품</li>
      </Link>
    </>
  );
}

export function Product() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const location = useLocation();
  return (
    // hash는 페이지 내부에서 나눈 영역을 말함 #content 이렇게 url에 포함됨
    // 예를 들어 특정 구역으로 이동
    <>
      <h3>{id}번 상품 페이지</h3>
      <p>검색어 q:{q}</p>
      <p>pathname: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <h1>404 Error</h1>
    </>
  );
}
