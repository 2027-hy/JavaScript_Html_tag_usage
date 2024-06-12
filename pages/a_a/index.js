import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import { copyTextToClipboard } from "../../utils/copyUtils.js";
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'code', 'a_a', 'code.txt');
    const codeContent = fs.readFileSync(filePath, 'utf8');

    return {
        props: {
            codeContent
        }
    };
}

export default function A_a({ codeContent }) {
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
            <h1>&lt;a&gt;&lt;a&gt;のページ</h1>
            <p>「a」はハイパーリンク（Hyperlink）を作成するための要素である。
                <br />
                ユーザーがクリックすると他の場所に移動したり、新しいページを開いたりするためのリンクを定義する。
            </p>
            <a href="https://www.google.com/?hl=ja" target="_blank" className={styles.link}>
                Google
            </a>
            <a href="https://www.yahoo.co.jp/" target="_blank" className={styles.link}>
                yahoo
            </a>
            <br />
            <button onClick={copyButton}>{copyStatus}</button>
            <div className={styles.iframeContainer}>
                <iframe className={styles.web} src="code/a_a/code.html" />
            </div>
            <div className={styles.description}>
                <Link href="/">
                    <a>[ホームへ戻る]</a>
                </Link>
            </div>
        </main>
    );
}