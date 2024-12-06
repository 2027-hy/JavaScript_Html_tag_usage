// pages/index.js
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function List() {
  return (
    <main className={styles.main}>
      <header>
        <h1>始めページ</h1>
        <p>本サイトでは、h,Link,ul,ol,tableタグをまとめる。</p>
      </header>
      <div className={styles.body}>
        <nav>
          <ul>
            <li>
              <Link href="/h_h" className={styles.link}>
                &lt;h&gt;&lt;/h&gt;のページ
              </Link>
            </li>
            <li>
              <Link href="/link_link" className={styles.link}>
                &lt;Link&gt;&lt;/Link&gt;のページ
              </Link>
            </li>
            <li>
              <Link href="/ul_ul" className={styles.link}>
                &lt;ul&gt;&lt;/ul&gt;のページ
              </Link>
            </li>
            <li>
              <Link href="/ol_ol" className={styles.link}>
                &lt;ol&gt;&lt;/ol&gt;のページ
              </Link>
            </li>
            <li>
              <Link href="/table_table" className={styles.link}>
                &lt;table&gt;&lt;table&gt;のページ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main >
  );
}
