const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  // your code here


  document.body.addEventListener('keydown', function(event){
    const key = event.key
    if (key === codes[index]) {
      index++
      if (index === codes.length) {
        alert("Hurray!");

        index = 0
      }
    } else {
      index = 0
    }
  })
}
