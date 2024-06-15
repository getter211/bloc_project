import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoText}>
            Tu Blog
          </Link>
        </div>

        <div className={styles.menu}>
          <div className={styles.menuLinks}>
            <Link className={styles.menuLink} href="/home">
              Home
            </Link>
            <Link className={styles.menuLink} href="/blog">
              Blog
            </Link>
            <Link className={styles.menuLink} href="/about">
              About
            </Link>
            <Link className={styles.menuLink} href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className={styles.actions}>
          <Link className={styles.actionLink} href="/login">
            Iniciar sesión
          </Link>
          <Link className={styles.actionLink} href="/register">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
