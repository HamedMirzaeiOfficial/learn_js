function onChangeFunction(event){
    console.log(event.target.value);
    console.log("Test");
}

function onClickFunction(event){
    console.log(event);
    if(event.ctrlKey){
        console.log("yes")
    }
}

function oneMouseOverFunction(event){
    console.log(event);
    event.target.innerHTML = 'سلام'
}

function oneMouseOutFunction(event){
    console.log(event);
    event.target.innerHTML = 'خدافز'
}

var persianChars = {
    65: 'ا',  // A
    66: 'ب',  // B
    67: 'ج',  // C
    68: 'د',  // D
    69: 'ه',  // E
    70: 'ف',  // F
    71: 'گ',  // G
    72: 'ح',  // H
    73: 'ی',  // I
    74: 'ج',  // J
    75: 'ک',  // K
    76: 'ل',  // L
    77: 'م',  // M
    78: 'ن',  // N
    79: 'و',  // O
    80: 'پ',  // P
    81: 'ق',  // Q
    82: 'ر',  // R
    83: 'س',  // S
    84: 'ت',  // T
    85: 'ع',  // U
    86: 'ش',  // V
    87: 'و',  // W
    88: 'خ',  // X
    89: 'ی',  // Y
    90: 'ز',  // Z
    97: 'ا',  // a
    98: 'ب',  // b
    99: 'ج',  // c
    100: 'د', // d
    101: 'ه', // e
    102: 'ف', // f
    103: 'گ', // g
    104: 'ح', // h
    105: 'ی', // i
    106: 'ج', // j
    107: 'ک', // k
    108: 'ل', // l
    109: 'م', // m
    110: 'ن', // n
    111: 'و', // o
    112: 'پ', // p
    113: 'ق', // q
    114: 'ر', // r
    115: 'س', // s
    116: 'ت', // t
    117: 'ع', // u
    118: 'ش', // v
    119: 'و', // w
    120: 'خ', // x
    121: 'ی', // y
    122: 'ز', // z
    32: ' ',  // Space
    // Add more as needed
};

function onKeyDownFunction(event){
    console.log(event);
    if (persianChars.hasOwnProperty(event.keyCode)) {
        event.preventDefault();  // Prevent the default action
        event.target.value += persianChars[event.keyCode];  // Append the Persian character
    }
}

function onloadFunction(event){
    console.log(event);
    alert('سلام خوش اومدید!!!');
}