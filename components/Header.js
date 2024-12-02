// components/Header.js
import React from 'react';
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header_Layout}>
      <Link href="/">
        <h1>JavaScriptの練習</h1>
      </Link>
      <p>このサイトは&lt;&gt;タグの練習・まとめのために作成したサイトである。</p>
    </header>
  );
};

export default Header;
