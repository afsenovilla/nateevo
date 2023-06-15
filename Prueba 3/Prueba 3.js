//Crea un progrma que sea capaz de transformar texto natural a código morse y viceversa.

const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
};

// Texto a morse
  function textToMorse(text) {
    const morseCodeText = text.split('').map(letter => morseCode[letter]).join(' ');
    return morseCodeText;
};

// Morse a texto
  function morseToText(morseCode) {
    const text = morseCode.split(' ').map(code => {
      const letter = Object.keys(morseCode).find(key => morseCode[key] === code);
      return letter;
    }).join('');
    return text;
};