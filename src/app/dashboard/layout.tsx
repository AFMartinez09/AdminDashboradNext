import Navbar from "../ui/dashboard/navbar/page";
import Sidebar from "../ui/dashboard/sidebar/page";
import styles from "../ui/dashboard/dashboard.module.css";

// all the time (in dashboard) we have these options (sidebar, and navbar)
const layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout