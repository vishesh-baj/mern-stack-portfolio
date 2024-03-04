import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const AppLayout = ({ children }) => {
  return (
    <div className="min-w-screen">
      <div className="flex">
        <div className="drawer lg:drawer-open">
          <input
            id="sidebar_drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Navbar />

            {children}
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
