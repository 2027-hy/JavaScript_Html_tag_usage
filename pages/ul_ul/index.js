import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import { copyTextToClipboard } from "../../utils/copyUtils.js";
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'code', 'ul_ul', 'code.txt');
    const codeContent = fs.readFileSync(filePath, 'utf8');

    return {
        props: {
            codeContent
        }
    };
}

export default function Ul_ul({ codeContent }) {
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
            <h1>&lt;ul&gt;&lt;ul&gt;のページ</h1>
            <p>「ul」は順序なしリスト（Unordered List）を定義する。
                <br></br>
                type属性を指定することで、各項目は円形または四角形のマークでマークされる。
            </p>
            <div className={styles.body}>
                <div>
                    <br />
                    <ul>
                        <li>
                            箇条書き1個目「・」塗りつぶしの円（type属性 : &quot;disc&ldquo;、デフォルトがこれ）
                        </li>
                        <li>
                            箇条書き2個目「・」塗りつぶしの円（type属性 : &quot;disc&ldquo;、デフォルトがこれ）
                        </li>
                        <li>
                            箇条書き3個目「・」塗りつぶしの円（type属性 : &quot;disc&ldquo;、デフォルトがこれ）
                        </li>
                    </ul>
                    <br />
                    <ul type="circle">
                        <li>
                            箇条書き1個目「○」空の円（type属性 : &quot;circle&ldquo;）
                        </li>
                        <li>
                            箇条書き2個目「○」空の円（type属性 : &quot;circle&ldquo;）
                        </li>
                        <li>
                            箇条書き3個目「○」空の円（type属性 : &quot;circle&ldquo;）
                        </li>
                    </ul>
                    <br />
                    <ul type="square">
                        <li>
                            箇条書き1個目「■」四角形（type属性 : &quot;square&ldquo;）
                        </li>
                        <li>
                            箇条書き2個目「■」四角形（type属性 : &quot;square&ldquo;）
                        </li>
                        <li>
                            箇条書き3個目「■」四角形（type属性 : &quot;square&ldquo;）
                        </li>
                    </ul>
                </div>
                <br />
                <div className={styles.centered_button}>
                    <button onClick={copyButton} className={styles.copy_btn_Layout}>{copyStatus}</button>
                </div>
                <div className={styles.iframeContainer}>
                    <h2 className={styles.framed}>このページのコード</h2>
                    <iframe className={styles.web} src="code/ul_ul/code.txt" />
                </div>
                <div >
                    <Link href="/" className={styles.link}>
                        [ホームへ戻る]
                    </Link>
                </div>
            </div>
        </main>
    );
}