const icon = document.querySelector("b");
const content = document.getElementsByClassName("slider__layer");

const layer = document.getElementsByClassName("slider__layer_row_item");
function clickbtn(event){
    icon.style.color="red";
    layer.style.color = "red";
    content.scrollLeft[0] +=80;
}
function change(){
}
function init(){
    
    icon.addEventListener("click", clickbtn);
}
init();