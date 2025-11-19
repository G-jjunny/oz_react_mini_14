import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className=" w-full flex justify-between items-center gap-2 p-4  fixed top-0 z-10">
      <Link to={`/`} className=" font-bold text-2xl">
        <div className="">OZ movie</div>
      </Link>
      <input type="text" placeholder="Search..." className=" mx-auto" />
      <div className=" flex gap-2">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </header>
  );
};
export default Navbar;
