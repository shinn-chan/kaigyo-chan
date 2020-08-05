var textArea = document.getElementById('textarea');
function getTextAreaValue() {
    return textArea.value;
}
function count() {
    var stringlength = getTextAreaValue().length;
    document.getElementById('counter').innerHTML = "\u6587\u5B57\u6570:" + stringlength;
}
function submitBtn() {
    // 変換機能
    var textContents = '.' + '\n' + getTextAreaValue(); /*文頭に改行を入れてtextareaの中身を取得*/
    var result = textContents.replace(/\n/g, 'ㅤ\n'); /*改行コードに空白文字を追加*/
    textArea.value = result; /*textareaに変換後のデーターを挿入*/
    // コピー機能
    textArea.select();
    document.execCommand("copy");
    var comfirmation = confirm('コピー完了！インスタのテキスト欄にそのまま貼り付けてね！');
    if (comfirmation) {
        window.open('instagram://app');
    }
}
function deleteBtn() {
    textArea.value = "";
}
textArea.addEventListener('input', count);
