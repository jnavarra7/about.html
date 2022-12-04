myLogo = document.getElementById("logo");
myHeader = document.getElementById("header");
myNav = document.querySelector("nav");

var myScrollFunction = function(){
    var y = window.scrollY; 
    if(y>=500){
        myLogo.className = "logo show";
        myHeader.style.backgroundColor = "white";
        myLogo.style.transition= "all .2s"
        myNav.style.transition= "all .4s"
    }

    else{
        myLogo.className = "logo hide"
        myHeader.style.backgroundColor= "";
    }
};

window.addEventListener("scroll", myScrollFunction);