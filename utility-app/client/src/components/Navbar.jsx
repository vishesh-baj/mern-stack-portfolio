import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };
  const username = localStorage.getItem("username");

  return (
    <div className="navbar bg-base-100 flex justify-between sticky top-0">
      <a className="btn btn-ghost text-xl ">Utility App</a>
      <ThemeController />
      <div>
        <p className="text-xs">Welcome {username}</p>

        <button
          className="btn btn-ghost hidden lg:block"
          onClick={handleLogout}
        >
          <HiOutlineDotsHorizontal className="hidden lg:block" />
        </button>
      </div>

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
