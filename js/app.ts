const textArea: HTMLInputElement = <HTMLInputElement>document.getElementById('textarea'); 

function getTextAreaValue(): string{
    return textArea.value;
}

function count(): void{
    const stringlength: number = getTextAreaValue().length;
    document.getElementById('counter').innerHTML = `文字数:${stringlength}`;
}

function submitBtn(): void{
    // 変換機能
    const textContents: string  = '.'+'\n'+getTextAreaValue(); /*文頭に改行を入れてtextareaの中身を取得*/
    const result: string = textContents.replace(/\n/g, 'ㅤ\n'); /*改行コードに空白文字を追加*/

    textArea.value = result;/*textareaに変換後のデーターを挿入*/

    // コピー機能
    textArea.select();
    document.execCommand("copy");

    const comfirmation: boolean = confirm('コピー完了！インスタのテキスト欄にそのまま貼り付けてね！');
    if (comfirmation){
        window.open('instagram://app');
    }
}

function deleteBtn(): void{
    textArea.value = "";
}

textArea.addEventListener('input', count);