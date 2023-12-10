import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import { NavLink, Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright{new Date().getFullYear} by worldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
