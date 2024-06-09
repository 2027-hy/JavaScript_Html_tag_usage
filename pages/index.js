import styles from "../styles/Home.module.css";

export default function List(){
  return (
    <main className ={styles.main}>
      <div>
        <header>
        <h1>Javascliptの練習</h1>
        <p>このサイトは＜＞タグの練習・まとめのために作成したサイトである。</p>
      </header>
      <nav>
        <ul className ={styles.framed}>
          <li>
            <a href="/h_h" target="_blank" className ={styles.link}>
            ＜h＞＜/h＞のページ
            </a>
          </li>

          <li>
            <a href="/a_a" target="_blank" className ={styles.link}>
            ＜a＞＜/a＞のページ
            </a>
          </li>

          <li>
            <a href="/ul_ul" target="_blank" className ={styles.link}>
            ＜ul＞＜/ul＞のページ
            </a>
          </li>

          <li>
            <a href="/ol_ol" target="_blank" className ={styles.link}>
            ＜ol＞＜/ol＞のページ
            </a>
          </li>
        
          <li>
            <a href="/table_table" target="_blank" className ={styles.link}>
            ＜table＞＜/table＞のページ
            </a>
          </li>
        </ul>
      </nav>
      </div>
      
    </main>
  );
}

