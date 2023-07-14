
function getTextareaValue() {
    const textarea = document.getElementById("text")
    let value = textarea.value;
    if(value === "") value = "Hello, World!"

    alert(`Перший унікальний символ у тексті: '${value}' - це '${findFirstUniqueLetter(value)}'`)
}


function findFirstUniqueLetter(text) {
    text = text.split(" ").filter(el => el.length > 0);
    let uniqueChar = [];
    
    for(let i = 0; i < text.length; i++) {
        const word = text[i].split("");
        for(let i = 0; i < word.length; i++) {
            if(word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
                uniqueChar.push(word[i])
                break
            }
        }
    };

    let result = "";
    for(let i = 0; i < uniqueChar.length; i++) {
        if(uniqueChar.indexOf(uniqueChar[i]) === uniqueChar.lastIndexOf(uniqueChar[i])) {
            result = uniqueChar[i];
            break
        }
    };

    return result
}