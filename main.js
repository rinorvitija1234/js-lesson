var v_button= document.getElementById("btn1");
var v_text= document.getElementById("txt1");
var v_buttonHide= document.getElementById("hide");

//  v_button.onclick - function() {
//        v_text.style.color-"red";
//        v_text.style.backgroundColor="lightgrey";
//        v_text.style.textAlgin - "center";
//        v_text.style.padding="20px";

// }

v_text.onmouseover= function(){
    v_text.style.cssText="color: red; backgroundColor: red"
}

v_button.onclick = function(){
    v_text.setAttribute("class", "test");

}
v_buttonHide.onclick = function(){
    v_text.setAttribute("class", "hide");

}