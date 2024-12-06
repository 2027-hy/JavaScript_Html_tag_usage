import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import { copyTextToClipboard } from "../../utils/copyUtils.js";
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'code', 'h_h', 'code.txt');
    const codeContent = fs.readFileSync(filePath, 'utf8');

    return {
        props: {
            codeContent
        }
    };
}

export default function H_h({ codeContent }) {
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
                <h1>&lt;h&gt;&lt;h&gt;のページ</h1>
                <p>「h」はタグを作成するための要素である。</p>
                <p>数字が大きほど見出しの大きさは大きくなる。</p>
            </header>
            <main className={styles.body}>
                <h1>h1の見出し</h1>
                <h2>h2の見出し</h2>
                <h3>h3の見出し</h3>
                <h4>h4の見出し</h4>
                <h5>h5の見出し</h5>
                <h6>h6の見出し</h6>
                <br />
                <div className={styles.centered_button}>
                    <button onClick={copyButton} className={styles.copy_btn_Layout}>{copyStatus}</button>
                </div>
                <div className={styles.iframeContainer}>
                    <iframe className={styles.web} src="code/h_h/code.html" />
                </div>
                <div>
                    <Link href="/" className={styles.link}>
                        [ホームへ戻る]
                    </Link>
                </div>
            </main>
        </main>
    );
}