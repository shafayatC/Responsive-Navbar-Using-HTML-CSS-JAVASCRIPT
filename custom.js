const menuBtn = document.getElementById("mobileMenu"); 
const menu = document.getElementById("menu"); 

const stick_1 = document.getElementById("stick_1");
const stick_3 = document.getElementById("stick_3");

var triggerBool = true

menuBtn.addEventListener("click", ()=>{

    if(triggerBool){
        menu.style.visibility = "visible";
        menu.style.opacity = "1";
        menu.style.transform = "scaleY(1)"
        // menu button animation
        stick_1.style.transform = "rotate(36deg)";
        stick_3.style.transform = "rotate(-36deg)";
        menuBtn.style.transform = "rotate(90deg) scale(0.8)"
        
    }else {
        menu.style.visibility = "hidden";
        menu.style.opacity = "0";
        menu.style.transform = "scaleY(0)"
        
        // menu button animation
        stick_1.style.transform = "rotate(0deg)";
        stick_3.style.transform = "rotate(0deg)";
        menuBtn.style.transform = "rotate(0deg) scale(1)"
    }
     triggerBool = !triggerBool;
})

