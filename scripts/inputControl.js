let ladderDiv = document.querySelector('#ladder');
let inputDiv = document.querySelector('#input-word');

//inputDiv.textContent = 'JAAaaaCk'

document.addEventListener('keyup', e => processKey(e));

function processKey(e) {
  const code = parseInt(e.keyCode);
  if (code >= 65 && code <= 90) {
    inputDiv.textContent += e.key.toUpperCase();
  }
}