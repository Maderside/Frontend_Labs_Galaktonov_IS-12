
//Task 1 - change element`s colors
let clicked1 = false;
let clicked2 = false;

var element1 = document.getElementById("cooking");
element1.onclick = function(){
    if(clicked1 == false){
        element1.style.backgroundColor = "lightblue";
        element1.style.color = "darkblue";
        clicked1 = true;
    }
    else{
        element1.style.backgroundColor = "lightgreen";
        element1.style.color = "black";
        clicked1 = false;
    }
    
}


var element2 = document.querySelectorAll("p")[3];
element2.onclick = function(){
    if(clicked2 == false){
        element2.style.backgroundColor = "lightgreen";
        element2.style.color = "black";
        clicked2 = true;
    }
    else{
        element2.style.backgroundColor = "lightblue";
        element2.style.color = "darkblue";
        clicked2 = false;
    }
}

//Task 2 - change images properties through buttons
var btAdd = document.getElementById("add");
var btIncrease = document.getElementById("increase");
var btDecrease = document.getElementById("decrease");
var btDelete = document.getElementById("delete");

btAdd.onclick = function(){
    var body = document.querySelector("body");
    var img = body.querySelector("img");

    body.insertAdjacentHTML('beforeend', img.outerHTML);
    console.log("Image added to body");
}

btIncrease.onclick = function(){
    var imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        currWidth = img.clientWidth;
        img.style.width = (currWidth + 50) + "px";
        
    });
}

btDecrease.onclick = function(){
    var imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        currWidth = img.clientWidth;
        img.style.width = (currWidth - 50) + "px";
    });
}

btDelete.onclick = function(){
    var imgs = document.querySelectorAll("img");
    if(imgs.length>1){
        var lastImg = imgs[imgs.length - 1];

        // Remove the last img element from it's parent
        lastImg.parentNode.removeChild(lastImg);
    }
    else{
        console.log("Impossible to delete initial image")
    }
    
};


