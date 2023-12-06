import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright{new Date().getFullYear} by worldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;