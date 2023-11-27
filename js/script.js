var button = document.querySelector (".show-cat");
var cat = document.querySelector (".cat");

button.addEventListener ("click" , function(){
    //button.innerText = "Its working";
    cat.classList.add ("show")
});