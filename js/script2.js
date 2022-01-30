function padString(str, num){
console.log(str, num);
    if(typeof(num) === 'number' &&  !isNaN(num)) {
        let str;
        let newStr = str.substr( num );
    console.log(newStr);
    }
}
padString('hello', 2);
