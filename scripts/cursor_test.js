const cursor = document.getElementById('cursor');
let cursorOn = true;


setInterval(() => {
  if (cursorOn) {
    cursor.style.opacity = 0;
  } else {
    cursor.style.opacity = 1;
  }
  cursorOn = !cursorOn;
}, 500)