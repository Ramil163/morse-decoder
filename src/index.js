const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let counter1 = 0;
    let counter2 = 10;
    let arr = [];

    for (let i = 0; i < expr.length; i ++) {
        if (counter2 % 10 === 0) {arr.push(expr.substring(counter1, counter2));  arr.push(' ')};
        counter1 += 1;
        counter2 += 1;
    }

    let arr2 = []; 
    for(const element of arr) {
        if (element[0] === '*') {arr2.push('  ')};
        let firstChar = element.indexOf('1');
        let strCut = element.slice(firstChar);
        arr2.push(strCut);
    }
    //return arr2;

    let arr3 = [];
    let counter = 0;

    for (const element of arr2) {
        // for (let i = 0; i < element.length; i += 1) {
            //let strOfDotsAndDashes = '';
            if (element === ' ') {
                arr3.push(' ');
            }
            if (element === '  ') {
                arr3.push('  ');
            }
            if (element[0] === '1') {
                let str = '';

                for (let i = 0; i < element.length; i = i + 2){

                    if(element[i + 1] === '0') { str += "."};
                    if(element[i + 1] === '1') { str += "-"};
                } 
                arr3.push(str);
            }

}
    //return arr3;

    let arr4 = [];
    
    for(const element of arr3) {
        if (element[0] === '-' || element[0] === '.') {
            arr4.push(MORSE_TABLE[element]);
        }
        if (element === '  ') {
            arr4.push(' ');
        }
    
};
//return arr4;

let arr5 = arr4.join('');

return arr5;

}
module.exports = {
    decode
}
