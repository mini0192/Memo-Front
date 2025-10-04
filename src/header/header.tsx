import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/memo">Memo</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
