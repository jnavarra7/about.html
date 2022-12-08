
$(document).ready(function(){
    $("#sweat1").css("opacity","70%")
    $("#sweat2").css("opacity","70%")
    $("#trojan1").css("opacity","70%")
    $("#trojan2").css("opacity","70%")
    $("#fucla1").css("opacity","70%")
    $("#fucla2").css("opacity","70%")
    $("#rosebowl1").css("opacity","70%")
    $("#rosebowl2").css("opacity","70%")
    $("#swim1").css("opacity","70%")
    $("#swim2").css("opacity","70%")
    $("#sweater1").css("opacity","70%")
    $("#sweater2").css("opacity","70%")
    });
    
    $("#sweat1").click(function(){
    $("#sweat").hide("shirt.png").attr("src", "sweat.jpg").fadeIn(1000)
    });

    $("#sweat2").click(function(){
    $("#sweat").hide("shirt.png").attr("src", "sweat2.jpg").fadeIn(1000)
    });

    $("#trojan1").click(function(){
    $("#trojan").hide("trojan.jpg").attr("src", "trojan2.jpg").fadeIn(1000)
    });
    $("#trojan2").click(function(){
    $("#trojan").hide("trojan.jpg").attr("src", "trojan3.jpg").fadeIn(1000)
    });

    $("#fucla1").click(function(){
    $("#fucla").hide("fuclashirt.png").attr("src", "fucla1.jpg").fadeIn(1000)
    });
    $("#fucla2").click(function(){
    $("#fucla").hide("fucla1.jpg").attr("src", "fucla2.jpg").fadeIn(1000)
    });
    
    $("#rosebowl1").click(function(){
    $("#rosebowl").hide("rosebowl.png").attr("src", "rosebowl1.jpg").fadeIn(1000)
    });
    $("#rosebowl2").click(function(){
    $("#rosebowl").hide("rosebowl1.jpg").attr("src", "rosebowl2.jpg").fadeIn(1000)
    });
    
    $("#swim1").click(function(){
    $("#swim").hide("swimshirt.png").attr("src", "swim1.jpg").fadeIn(1000)
    });
    $("#swim2").click(function(){
    $("#swim").hide("swim1.jpg").attr("src", "swim2.jpg").fadeIn(1000)
    });

    $("#sweater1").click(function(){
    $("#sweater").hide("sweater.png").attr("src", "sweater1.jpg").fadeIn(1000)
    });
    $("#sweater2").click(function(){
    $("#sweater").hide("sweater1.jpg").attr("src", "sweater2.jpg").fadeIn(1000)
    });
    
    $("#trojan1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });
    
    $("#trojan2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });
    $("#sweat1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });
    $("#sweat2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });
    
    $("#fucla1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#fucla2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#rosebowl1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#rosebowl2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#swim1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#swim2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#sweater1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#sweater2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    document.querySelector("#dark").addEventListener("click", function(){
        document.body.style.backgroundColor= "crimson";
        });
        document.querySelector("#dark").addEventListener("click", function(){
        document.body.style.color= "gold";
        });
        document.querySelector("#light").addEventListener("click", function(){
        document.body.style.backgroundColor= "white";
        });
        document.querySelector("#light").addEventListener("click", function(){
        document.body.style.color= "black";
        });
