function translateToMorse(){
  const morseCode = {
    'A': '.-', 
    'B': '-...', 
    'C': '-.-.', 
    'D': '-..', 
    'E': '.', 
    'F': '..-.', 
    'G': '--.', 
    'H': '....', 
    'I': '..', 
    'J': '.---', 
    'K': '-.-', 
    'L': '.-..', 
    'M': '--',
      'N': '-.', 
      'O': '---', 
      'P': '.--.', 
      'Q': '--.-', 
      'R': '.-.', 
      'S': '...', 
      'T': '-', 
      'U': '..-', 
      'V': '...-', 
      'W': '.--', 
      'X': '-..-', 
      'Y': '-.--', 
      'Z': '--..',
      ' ': ' '
  };

  const inputText = document.querySelector('.input-text').value.toUpperCase();
  const outputBox = document.querySelector('.output-text');
  let outputText = '';

  for(let char of inputText){
    if(morseCode[char]){
      outputText += morseCode[char] + ' ';
    }else{
      outputText += char;
    }
  }

  outputBox.value = outputText.trim();
}

function clearInput(){
  const inputText = document.querySelector('.input-text');
  const outputBox = document.querySelector('.output-text');

  inputText.value = '';
  outputBox.value = '';
}

const translatorBtn = document.querySelector('.translate-btn');
const clearBtn = document.querySelector('.clear-btn');

translatorBtn.addEventListener('click', translateToMorse);
clearBtn.addEventListener('click', clearInput);