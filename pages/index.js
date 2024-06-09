import styles from "../styles/Home.module.css";

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
            <a href="/h_h" target="_blank" className ={styles.link}>
            &lt;h&gt;&lt;/h&gt;のページ
            </a>
          </li>

          <li>
            <a href="/a_a" target="_blank" className ={styles.link}>
            &lt;av&lt;/a&gt;のページ
            </a>
          </li>

          <li>
            <a href="/ul_ul" target="_blank" className ={styles.link}>
            &lt;ul&gt;&lt;/ul&gt;のページ
            </a>
          </li>

          <li>
            <a href="/ol_ol" target="_blank" className ={styles.link}>
            &lt;ol&gt;&lt;/ol&gt;のページ
            </a>
          </li>
        
          <li>
            <a href="/table_table" target="_blank" className ={styles.link}>
            &lt;table&gt;&lt;table&gt;のページ
            </a>
          </li>
        </ul>
      </nav>
      </div>
      
    </main>
  );
}

