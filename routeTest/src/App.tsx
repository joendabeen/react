import "./App.css";
import { Header, Main, NotFound, Product } from "./components/Components";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Main />
//       </>
//     ),
//   },
//   {
//     path: "/product/*",
//     element: (
//       <>
//         <Header />
//         <Product />
//       </>
//     ),
//   },
//   {
//     path: "/*",
//     element: (
//       <>
//         <Header />
//         <NotFound />
//       </>
//     ),
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "product/*", element: <Product /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/*" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
