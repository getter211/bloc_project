import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoText}>
            Blog Yucateco 😸
          </Link>
        </div>

        <div className={styles.menu}>
          <div className={styles.menuLinks}>
            <Link className={styles.menuLink} href="/home">
              Home
            </Link>
            <Link className={styles.menuLink} href="/profile">
              Profile
            </Link>
            <Link className={styles.menuLink} href="/about">
              About
            </Link>
            <Link className={styles.menuLink} href="/settings">
              Settings
            </Link>
            Botto
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
