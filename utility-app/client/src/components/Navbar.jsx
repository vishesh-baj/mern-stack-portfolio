import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <a className="btn btn-ghost text-xl ">Utility App</a>
      <button className="btn btn-ghost">
        <HiOutlineDotsHorizontal className="hidden lg:block" />
      </button>

      <label
        htmlFor="sidebar_drawer"
        className="btn btn-ghost drawer-button lg:hidden"
      >
        <RxHamburgerMenu />
      </label>
    </div>
  );
};

export default Navbar;
