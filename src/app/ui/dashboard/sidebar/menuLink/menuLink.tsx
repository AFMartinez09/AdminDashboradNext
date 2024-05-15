"use client"

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

// React.FC defining the type of functional component
// <{...}>defining the type of props inside of React.FC
// that's MenuLink expects-
const MenuLink: React.FC<{item: MenuItem}> = ({ item }) => {
  const pathname = usePathname()
  
  return (
    <Link href={item.path} 
    // Show in what page the user is in this moment
      className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink