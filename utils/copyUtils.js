export const copyTextToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return 'コピー成功';
    } catch (error) {
        console.error('クリップボードにコピーできませんでした:', error);
        return 'コピー失敗';
    }
};