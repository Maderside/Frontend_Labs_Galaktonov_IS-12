let targetCell = document.getElementById("target");
let colorPicker = document.getElementById("color");
targetCell.onmouseover = function(){
    targetCell.style.backgroundColor = getRandomColor();
    console.log("Mouse over");
}

targetCell.onclick = function(){
  console.log("Click")
  targetCell.style.backgroundColor = colorPicker.value;
}

targetCell.ondblclick = function(){
  console.log("Double click");
  let rows = document.querySelectorAll("tr");
  rows.forEach(row => {
     row.children[row.children.length - 1].style.backgroundColor = colorPicker.value;
  });
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }