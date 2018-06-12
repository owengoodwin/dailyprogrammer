function followsIBeforeE(word) {
    if(word.indexOf("ei") === -1 && word.indexOf("ie") === -1){
        return true;
    }
    else if(word.indexOf("ei") !== -1){
        return word[word.indexOf("ei") - 1] === "c";
    }
    else if(word.indexOf("ie") !== -1){
        return word[word.indexOf("ie") - 1] !== "c";
    }
}

console.log(followsIBeforeE("a")); //true
console.log(followsIBeforeE("zombie")); //true
console.log(followsIBeforeE("transceiver")); //true
console.log(followsIBeforeE("veil")); //false
console.log(followsIBeforeE("icier")); //false
