import styles from "../../styles/Home.module.css";

export default function a_a(){
    return (
        <main className ={styles.main}>
            <h1>&lt;a&at;&gt;&llt;a&gt;のページ</h1>
            <p>「a」はハイパーリンク（Hyperlink）を作成するための要素である。
                <br/>
                ユーザーがクリックすると他の場所に移動したり、新しいページを開いたりするためのリンクを定義する。
            </p>
            <a href="https://www.google.com/?hl=ja" target="_blank" className ={styles.link}>
            Google
            </a>
            <a href="https://www.yahoo.co.jp/" target="_blank" className ={styles.link}>
            yahoo
            </a>    

            <div className ={styles.description}>
                <a href="/" target="_blank">
                [ホームへ戻る]
                </a>
            </div>
                   
        </main>    
    );
}