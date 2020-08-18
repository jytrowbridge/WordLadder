const startWordDiv = document.getElementById('start-word');
const endWordDiv = document.getElementById('end-word');

const ladder = createWordLadder();
const startWord = ladder[0];
const endWord = ladder[ladder.length - 1];

startWordDiv.innerHTML = startWord;
endWordDiv.innerHTML = endWord;