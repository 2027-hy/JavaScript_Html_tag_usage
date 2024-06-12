import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function List(){
  return (
    <main className ={styles.main}>
      <div>
        <header>
        <h1>Javascliptの練習</h1>
        <p>このサイトは&lt;&gt;タグの練習・まとめのために作成したサイトである。</p>
      </header>
      <nav>
        <ul className ={styles.framed}>
          <li>
            <Link href="https://javasclipt-tag-usage.vercel.app/h_h" className ={styles.link}>
            &lt;h&gt;&lt;/h&gt;のページ
            </Link>
          </li>

          <li>
            <Link href="https://javasclipt-tag-usage.vercel.app/a_a" className ={styles.link}>
            &lt;a&gt;&lt;/a&gt;のページ
            </Link>
          </li>

          <li>
            <Link href="https://javasclipt-tag-usage.vercel.app/ul_ul" className ={styles.link}>
            &lt;ul&gt;&lt;/ul&gt;のページ
            </Link>
          </li>

          <li>
            <Link href="https://javasclipt-tag-usage.vercel.app/ol_ol" className ={styles.link}>
            &lt;ol&gt;&lt;/ol&gt;のページ
            </Link>
          </li>
        
          <li>
            <Link href="https://javasclipt-tag-usage.vercel.app/table_table" className ={styles.link}>
            &lt;table&gt;&lt;table&gt;のページ
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </main>
  );
}

