const clickBtn = ()=>{
    let textarea = document.getElementById('textarea').value;
    // 何に変換したらいいかわからない↓
    result = textarea.replace(/\n/g, '');
    console.log(result);
    document.getElementById('textarea').value = result;
    document.getElementById('textarea').select();
    document.execCommand("copy");
    alert('コピーできやした！');
}