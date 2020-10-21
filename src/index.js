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
	 	  ' ':  ' ', 
};

function decode(expr) {
	let morse = [];
	let result = '';
	for(let i = 0; i < expr.length / 10  ; i++) {
		morse.push(expr.split('').slice(i * 10, (i + 1) * 10));
	}

	for(let array of morse) {
        let newArr = array.join('');
		result += MORSE_TABLE[(newArr.replace(/11/g, '-')
									 .replace(/00/g, '')
									 .replace(/10/g, '.')
									 .replace(/\*{10}/g, ' '))];
 }

	return result;
}

module.exports = {
    decode
}
