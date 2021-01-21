
const icon = document.querySelectorAll("b");
const content = document.querySelector(".slider__layer");
const content2 = document.querySelector(".slider__layer2");
const content3 = document.querySelector(".slider__layer3");
const ul = document.querySelector("status-bar__menu");
const li = document.querySelectorAll("slider__img");
const layer = document.getElementsByClassName("slider__layer_row_item");
const currentindex = 0;


function clickbtn(event){
    
    move();
    icon[i].style.color="red";
}
function move(){
    var le=0;
    var i=0;
    var licounter = layer.length;
    if(i<licounter-1){
        le+=100;
        i++;
    }
    else{
        le=0;
        i=0;
    }
    content.style
    content.style.left = "-"+le+"%";
}

function init(){
    for(var i=0;i<icon.length;i++){
        icon[i].addEventListener("click", clickbtn);
    }
}
init();

