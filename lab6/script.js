let url = 'https://randomuser.me/api';
let btn = document.getElementById("btGet");
let divs = document.querySelectorAll("div");
let isFirst = true;
let n = 5;
btn.onclick = function(){
    if(isFirst == false){
        for (let i = 0; i < n; i++) {
            let div = divs[i];
            div.innerHTML="";
        }
    }
    isFirst=false;
    for (let i = 0; i < n; i++) {
        let div = divs[i];
        fetch(url)
        .then((response) => {
            return response.json();
         })
        .then((data) => {
            let user = data.results[0];
            let img = `<img src='${user.picture.large}' alt='Person photo'>`;
            div.innerHTML += img+'<br>';
            div.innerHTML += user.name.title+" "+user.name.first+" "+user.name.last+'<br>';
            div.innerHTML += user.location.city+', '+user.location.country+'<br>';
            div.innerHTML += "Postcode: " + user.location.postcode+'<br>';
            
            console.log(user);
        });
        
    }
    
}
