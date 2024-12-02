import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import { copyTextToClipboard } from "../../utils/copyUtils.js";
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'code', 'ol_ol', 'code.txt');
    const codeContent = fs.readFileSync(filePath, 'utf8');

    return {
        props: {
            codeContent
        }
    };
}
export default function Ol_ol({ codeContent }) {
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
            <header>
                <h1>&lt;ol&gt;&lt;ol&gt;のページ</h1>
                <p>「ol」は順序付きリスト（Ordered List）を作成するための要素である。
                    type属性を指定することで、数字やアルファベットなどが使用されて、順序を表現できる。
                </p>
            </header>
            <body className={styles.body}>
                <div>
                    <br />
                    <ol type="1">
                        <li>
                            箇条書き1個目「数字」（type属性 : &quot;1&quot;、デフォルトがこれ）
                        </li>
                        <li>
                            箇条書き2個目「数字」（type属性 : &quot;1&quot;、デフォルトがこれ）
                        </li>
                        <li>
                            箇条書き3個目「数字」（type属性 : &quot;1&quot;、デフォルトがこれ）
                        </li>
                    </ol>
                    <br />
                    <ol type="1" start="10">
                        <li>
                            箇条書き1個目「始めの数字指定」（type属性 : &quot;1&quot; start=&quot;10&quot;（始めにしたい数字））
                        </li>
                        <li>
                            箇条書き2個目「始めの数字指定」（type属性 : &quot;1&quot; start=&quot;10&quot;（始めにしたい数字））
                        </li>
                        <li>
                            箇条書き3個目「始めの数字指定」（type属性 : &quot;1&quot; start=&quot;10&quot;（始めにしたい数字））
                        </li>
                    </ol>
                    <br />
                    <ol type="a">
                        <li>
                            箇条書き1個目「英語の小文字」（type属性 : &quot;a&quot;）
                        </li>
                        <li>
                            箇条書き2個目「英語の小文字」（type属性 : &quot;a&quot;）
                        </li>
                        <li>
                            箇条書き3個目「英語の小文字」（type属性 : &quot;a&quot;）
                        </li>
                    </ol>
                    <br />
                    <ol type="A">
                        <li>
                            箇条書き1個目「英語の大文字」（type属性 : &quot;A&quot;）
                        </li>
                        <li>
                            箇条書き2個目「英語の大文字」（type属性 : &quot;A&quot;）
                        </li>
                        <li>
                            箇条書き3個目「英語の大文字」（type属性 : &quot;A&quot;）
                        </li>
                    </ol>
                    <br />
                    <ol type="i">
                        <li>
                            箇条書き1個目「ギリシア文字の小文字」（type属性 : &quot;i&quot;）
                        </li>
                        <li>
                            箇条書き2個目「ギリシア文字の小文字」（type属性 : &quot;i&quot;）
                        </li>
                        <li>
                            箇条書き3個目「ギリシア文字の小文字」（type属性 : &quot;i&quot;）
                        </li>
                    </ol>
                    <br />
                    <ol type="I">
                        <li>
                            箇条書き1個目「ギリシア文字の大文字」（type属性 : &quot;I&quot;）
                        </li>
                        <li>
                            箇条書き2個目「ギリシア文字の大文字」（type属性 : &quot;I&quot;）
                        </li>
                        <li>
                            箇条書き3個目「ギリシア文字の大文字」（type属性 : &quot;I&quot;）
                        </li>
                    </ol>
                </div>
                <br />
                <div className={styles.centered_button}>
                    <button onClick={copyButton} className={styles.copy_btn_Layout}>{copyStatus}</button>
                </div>
                <div className={styles.iframeContainer}>
                    <iframe className={styles.web} src="code/ol_ol/code.html" />
                </div>
                <div>
                    <Link href="/" className={styles.link}>
                        [ホームへ戻る]
                    </Link>
                </div>
            </body>
        </main>
    );
}
