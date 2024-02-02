import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

import styles from "./AppLayout.module.css";

//////////////////////////
// Building the App Layout
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
