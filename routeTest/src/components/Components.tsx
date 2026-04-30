import { Link } from "react-router-dom";

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
  return (
    <>
      <h3>Product</h3>
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
