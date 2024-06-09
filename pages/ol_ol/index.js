import styles from "../../styles/Home.module.css";

export default function Ol_ol(){
    return (
        <main className ={styles.main}>
            <h1>&lt;ol&gt;&lt;ol&gt;のページ</h1>
            <p>「ol」は順序付きリスト（Ordered List）を作成するための要素である。
                type属性を指定することで、数字やアルファベットなどが使用されて、順序を表現できる。
            </p>
            <div>
                <br />
                <ol type="1">
                    <li>
                    箇条書き1個目「数字」（type属性："1"、デフォルトがこれ）
                    </li>
                    <li>
                    箇条書き2個目「数字」（type属性："1"、デフォルトがこれ）
                    </li>
                    <li>
                    箇条書き3個目「数字」（type属性："1"、デフォルトがこれ）
                    </li>
                </ol>
                <br />
                <ol type="1" start="10">
                    <li>
                    箇条書き1個目「始めの数字指定」（type属性："1" start="10（始めにしたい数字）"）
                    </li>
                    <li>
                    箇条書き2個目「始めの数字指定」（type属性："1" start="10（始めにしたい数字）"）
                    </li>
                    <li>
                    箇条書き3個目「始めの数字指定」（type属性："1" start="10（始めにしたい数字）"）
                    </li>
                </ol>
                <br />
                <ol type="a">
                    <li>
                    箇条書き1個目「英語の小文字」（type属性："a"）
                    </li>
                    <li>
                    箇条書き2個目「英語の小文字」（type属性："a"）
                    </li>
                    <li>
                    箇条書き3個目「英語の小文字」（type属性："a"）
                    </li>
                </ol>
                <br />
                <ol type="A">
                    <li>
                    箇条書き1個目「英語の大文字」（type属性："A"）
                    </li>
                    <li>
                    箇条書き2個目「英語の大文字」（type属性："A"）
                    </li>
                    <li>
                    箇条書き3個目「英語の大文字」（type属性："A"）
                    </li>
                </ol>
                <br />
                <ol type="i">
                <li>
                    箇条書き1個目「ギリシア文字の小文字」（type属性："i"）
                    </li>
                    <li>
                    箇条書き2個目「ギリシア文字の小文字」（type属性："i"）
                    </li>
                    <li>
                    箇条書き3個目「ギリシア文字の小文字」（type属性："i"）
                    </li>
                </ol>
                <br />
                <ol type="I">
                    <li>
                    箇条書き1個目「ギリシア文字の大文字」（type属性："I"）
                    </li>
                    <li>
                    箇条書き2個目「ギリシア文字の大文字」（type属性："I"）
                    </li>
                    <li>
                    箇条書き3個目「ギリシア文字の大文字」（type属性："I"）
                    </li>
                </ol>
            </div>
            <div className ={styles.description}>
                <a href="/" target="_blank">
                [ホームへ戻る]
                </a>
            </div>
        </main>    
    );
}