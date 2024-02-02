import { NavLink } from "react-router-dom";
////////////////////
// Using CSS Modules
import styles from "./PageNav.module.css";

///////////////////////////////////////////////////////
// Linking Between Routes With <Link /> and <NavLink />
function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
