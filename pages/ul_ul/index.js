import styles from "../../styles/Home.module.css";

export default function ul_ul(){
    return (
        <main className ={styles.main}>
            <h1>＜ul＞＜／ul＞のページ</h1>
            <p>「ul」は順序なしリスト（Unordered List）を定義する。
                <br></br>
                type属性を指定することで、各項目は円形または四角形のマークでマークされる。
            </p>
            <div>
            <br/>
            <ul>
                <li>
                箇条書き1個目「・」塗りつぶしの円（type属性："disc"、デフォルトがこれ）
                </li>
                <li>
                箇条書き2個目「・」塗りつぶしの円（type属性："disc"、デフォルトがこれ）
                </li>
                <li>
                箇条書き3個目「・」塗りつぶしの円（type属性："disc"、デフォルトがこれ）
                </li>
            </ul>
            <br/>
            <ul type="circle">
                <li>
                箇条書き1個目「〇」空の円（type属性："circle"）
                </li>
                <li>
                箇条書き2個目「〇」空の円（type属性："circle"）
                </li>
                <li>
                箇条書き3個目「〇」空の円（type属性："circle"）
                </li>
            </ul>
            <br/>
            <ul type="square">
                <li>
                箇条書き1個目「■」四角形（type属性："square"）
                </li>
                <li>
                箇条書き2個目「■」四角形（type属性："square"）
                </li>
                <li>
                箇条書き3個目「■」四角形（type属性："square"）
                </li>
            </ul>
            </div>
            <div className ={styles.description}>
                <a href="/" target="_blank">
                [ホームへ戻る]
                </a>
            </div>
        </main>    
    );
}