const count = () =>{
    let stringlength = document.getElementById('textarea').value.length;
    document.getElementById('counter').innerHTML = `文字数:${stringlength}`;
}

document.getElementById('textarea').addEventListener('input', count);

const submitBtn = ()=>{
    // 変換機能
    let textarea = '.'+'\n'+document.getElementById('textarea').value; /*文頭に改行を入れてtextareaの中身を取得*/
    result = textarea.replace(/\n/g, 'ㅤ\n'); /*改行コードに空白文字を追加*/
    document.getElementById('textarea').value = result;/*textareaに変換後のデーターを挿入*/

    // コピー機能
    document.getElementById('textarea').select();
    document.execCommand("copy");

    let comfirmation = confirm('コピー完了！インスタのテキスト欄にそのまま貼り付けてね！');
    if (comfirmation){
        window.open('instagram://');
    }
}

const deleteBtn = ()=>{
    document.getElementById('textarea').value = "";
}