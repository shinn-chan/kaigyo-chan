const count = () =>{
    let stringlength = document.getElementById('textarea').value.length;
    document.getElementsByClassName('count').innerHTML.put(`文字数:${stringlength}`);
}

const submitBtn = ()=>{
    // 変換機能
    let textarea = '.'+'\n'+document.getElementById('textarea').value; /*文頭に改行を入れてtextareaの中身を取得*/
    result = textarea.replace(/\n/g, 'ㅤ\n'); /*改行コードに空白文字を追加*/
    document.getElementById('textarea').value = result;/*textareaに変換後のデーターを挿入*/

    // コピー機能
    document.getElementById('textarea').select();
    document.execCommand("copy");
    alert('コピー完了！インスタのテキスト欄にそのまま貼り付けてね！');
}

const deleteBtn = ()=>{
    document.getElementById('textarea').value = "";
}