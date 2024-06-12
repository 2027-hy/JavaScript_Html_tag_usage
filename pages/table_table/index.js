import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import { copyTextToClipboard } from "../../utils/copyUtils.js";
import styles from "../../styles/Home.module.css";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'code', 'table_table', 'code.txt');
    const codeContent = fs.readFileSync(filePath, 'utf8');

    return {
        props: {
            codeContent
        }
    };
}
export default function Table_table({ codeContent }) {
    const [copyStatus, setCopyStatus] = useState('コピー');

    const copyButton = async () => {
        const status = await copyTextToClipboard(codeContent);
        setCopyStatus(status);
        setTimeout(() => {
            setCopyStatus('コピー');
        }, 1000);
    };

    return (
        <main className={styles.main}>
            <h1>&lt;table&gt;&lt;table&gt;のページ</h1>
            <p>tableタグは、表を作成する際に使用しtrタグ、thタグ、tdタグと併せて使用する。
            </p>
            <ul>
                <li><strong>tbody</strong>
                    <p>
                        tbody要素は、HTMLの表（table）内の本文部分を定義する。
                    </p>
                </li>
                <br />
                <li><strong>thead</strong>
                    <p>
                        thead要素は、表の見出し部分（表のヘッダー）を定義するために使用される。
                        <br />
                        通常、表の最初の行に配置され、列の見出しを示す。
                    </p>
                </li>
                <br />
                <li><strong>trタグ</strong>
                    <p>
                        「tr」は「table row（テーブルロー）」の略で、表なかの行を作成する際に使用する。
                        <br />
                        trタグを使用した分だけ、行の数が追加されていく。
                    </p>
                </li>
                <br />
                <li><strong>thタグ</strong>
                    <p>
                        「th」タグ「table header（テーブルヘッダー）」の略で、表のなかの見出しのセルとして使用する。
                    </p>
                </li>
                <br />
                <li><strong>tdタグ</strong>
                    <p>
                        「td」は「table data（テーブルデータ）」の略で、表のなかの見出し（th）に対するデータのセルとして使用する。
                    </p>
                </li>
            </ul>
            <div>
                <br />
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>商品名</th>
                            <th>価格</th>
                            <th>在庫</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>りんご</td>
                            <td>100円</td>
                            <td>10個</td>
                        </tr>
                        <tr>
                            <td>バナナ</td>
                            <td>80円</td>
                            <td>15個</td>
                        </tr>
                        <tr>
                            <td>オレンジ</td>
                            <td>120円</td>
                            <td>8個</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <button onClick={copyButton}>{copyStatus}</button>
            <div className={styles.iframeContainer}>
                <iframe className={styles.web} src="code/table_table/code.html" />
            </div>
            <div className={styles.description}>
                <Link href="/about">
                    <a>[ホームへ戻る]</a>
                </Link>
            </div>
        </main>
    );
}