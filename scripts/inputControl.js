let ladderDiv = document.querySelector('#ladder');
let inputDiv = document.querySelector('#input-word');

function processKey(e) {
  const code = parseInt(e.keyCode);
  if (code >= 65 && code <= 90) { // letters
    inputDiv.textContent += e.key.toUpperCase();
  } else if (code == 8) {  // backspace
    inputDiv.textContent = inputDiv.textContent.substring(0, inputDiv.textContent.length - 1);
  } else if (code == 13) {  // enter
    console.log('enter hit')
    submitWord(inputDiv.textContent);
    inputDiv.textContent = "";
  }
}

function submitWord(word) {
  const cleanWord = word.replace(/[^A-Z]/g, '');
  if (getNextWords(cleanWord).includes(endWord)) {
    endWordDiv.style.color = "red";
  } else if (cleanWord in scrabDic) {
    let wordDiv = document.createElement("div");
    wordDiv.classList.add('ladder-cleanWord');
    wordDiv.textContent = cleanWord.toUpperCase();
    ladderDiv.appendChild(wordDiv);
  }
}

document.addEventListener('keyup', e => processKey(e));