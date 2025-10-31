import { Link, Outlet } from "react-router";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";

const Layout = () => {
  return (
    <div>
      {/* 여기에 nav */}
      <nav className=" flex justify-between">
        <Link to="/">
          <div className=" text-xl">Logo</div>
        </Link>
      </nav>
      {/* 여기에는 각 페이지 내용들 */}
      <Outlet />
      {/* 여기에 푸터 */}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
