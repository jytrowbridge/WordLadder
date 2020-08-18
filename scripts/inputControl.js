let ladderDiv = document.querySelector('#ladder');
let inputDiv = document.querySelector('#input-word');

//inputDiv.textContent = 'JAAaaaCk'

document.addEventListener('keyup', e => processKey(e));

function processKey(e) {
  const code = e.key.charCodeAt();
  if (code >= 97 && code <= 122) {
    
  }
}