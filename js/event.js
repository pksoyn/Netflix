
const left_btn = document.getElementsByClassName("slider__layer__left");
const right_btn = document.getElementsByClassName("slider__layer__right");
const left_btn2 = document.getElementsByClassName("slider__layer__left2");
const right_btn2 = document.getElementsByClassName("slider__layer__right2");
const left_btn3 = document.getElementsByClassName("slider__layer__left3");
const right_btn3 = document.getElementsByClassName("slider__layer__right3");
const content = document.querySelector(".slider__layer");
const content2 = document.querySelector(".slider__layer2");
const content3 = document.querySelector(".slider__layer3");
const ul = document.querySelector("status-bar__menu");
const li = document.querySelectorAll("slider__img");
const layer = document.getElementsByClassName("slider__layer_row_item");
const currentindex = 0;


function right_clickbtn(event){
    rightmove();
    /*var getId=$(this).attr("id");
    left_btn[i].style.color="red";*/
}
function left_clickbtn(event){
    leftmove();
}
function right_clickbtn2(event){
    rightmove2();
    /*var getId=$(this).attr("id");
    left_btn[i].style.color="red";*/
}
function left_clickbtn2(event){
    leftmove2();
}
function right_clickbtn3(event){
    rightmove3();
    /*var getId=$(this).attr("id");
    left_btn[i].style.color="red";*/
}
function left_clickbtn3(event){
    leftmove3();
}
function rightmove(){
    var le=0;
    var i=0;
    var licounter = layer.length;
    
    if(i<licounter-1){
        le+=10;
        i++;
    }
    else{
        le=0;
        i=0;
    }
    content.style.left = "-"+le+"%";
    content.style.transition= "left 1s";

}
function leftmove(){
    var le=0;
    var i=0;
    var licounter = layer.length;
    if(i<licounter-1){
        le+=10;
        i++;
    }
    else{
        le=0;
        i=0;
    }
    content.style.left = le+"%";
    content.style.transition= "left 1s";
}
function rightmove2(){
    var le=0;
    var i=0;
    var licounter = layer.length;
    
    if(i<licounter-1){
        le+=10;
        i++;
        
    content2.style.left = "-"+le+"%";
    content2.style.transition= "left 1s";
    }
    else{
        le=0;
        i=0;
        content2.style.transform = "translate3d(0px,0px,0px)";
        content2.style.transition= "left 1s";
    }

}
function leftmove2(){
    var le=0;
    var i=0;
    var licounter = layer.length;
    if(i<licounter-1){
        le+=10;
        i++;
    }
    else{
        le=0;
        i=0;
    }
    content2.style.left = le+"%";
    content2.style.transition= "left 1s";
}
function rightmove3(){
    var le=0;
    var i=0;
    var licounter = layer.length;
    
    if(i<licounter-1){
        le+=10;
        i++;
    }
    else{
        le=0;
        i=0;
    }
    content3.style.left = "-"+le+"%";
    content3.style.transition= "left 1s";

}
function leftmove3(){
    var le=0;
    var i=0;
    var licounter = layer.length;
    if(i<licounter-1){
        le+=10;
        i++;
    }
    else{
        le=0;
        i=0;
    }
    content3.style.left = le+"%";
    content3.style.transition= "left 1s";
}
function init(){
    left_btn[0].addEventListener("click", left_clickbtn);
    right_btn[0].addEventListener("click", right_clickbtn);
    left_btn2[0].addEventListener("click", left_clickbtn2);
    right_btn2[0].addEventListener("click", right_clickbtn2);
    left_btn3[0].addEventListener("click", left_clickbtn3);
    right_btn3[0].addEventListener("click", right_clickbtn3);
}
init();

