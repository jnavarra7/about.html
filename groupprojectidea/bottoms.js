$(document).ready(function(){
    $("#sweats1").css("opacity","70%")
    $("#sweats2").css("opacity","70%")
    $("#shorts1").css("opacity","70%")
    $("#shorts2").css("opacity","70%")
    $("#redsweats1").css("opacity","70%")
    $("#redsweats2").css("opacity","70%")
    $("#yellowshorts1").css("opacity","70%")
    $("#yellowshorts2").css("opacity","70%")
    $("#whitesweats1").css("opacity","70%")
    $("#whitesweats2").css("opacity","70%")
    $("#maroonsweats1").css("opacity","70%")
    $("#maroonsweats2").css("opacity","70%")
    });
    
    $("#sweats1").click(function(){
    $("#sweats").hide("baseball.png").attr("src", "sweats1.jpg").fadeIn(1000)
    });

    $("#sweats2").click(function(){
    $("#sweats").hide("sweats1.jpg").attr("src", "sweats2.jpg").fadeIn(1000)
    });

    $("#shorts1").click(function(){
    $("#shorts").hide("ortho.png").attr("src", "shorts1.jpg").fadeIn(1000)
    });
    $("#shorts2").click(function(){
    $("#shorts").hide("shorts1.jpg").attr("src", "shorts2.jpg").fadeIn(1000)
    });

    $("#redsweats1").click(function(){
    $("#redsweats").hide("leggings.png").attr("src", "redsweats1.jpg").fadeIn(1000)
    });
    $("#redsweats2").click(function(){
    $("#redsweats").hide("redsweats1.jpg").attr("src", "redsweats2.jpg").fadeIn(1000)
    });
    
    $("#yellowshorts1").click(function(){
    $("#yellowshorts").hide("shortssc.png").attr("src", "yellowshorts1.jpg").fadeIn(1000)
    });
    $("#yellowshorts2").click(function(){
    $("#yellowshorts").hide("yellowshorts1.jpg").attr("src", "yellowshorts2.jpg").fadeIn(1000)
    });
    
    $("#whitesweats1").click(function(){
    $("#whitesweats").hide("white.png").attr("src", "whitesweats1.jpg").fadeIn(1000)
    });
    $("#whitesweats2").click(function(){
    $("#whitesweats").hide("whitesweats1.jpg").attr("src", "whitesweats2.jpg").fadeIn(1000)
    });

    $("#maroonsweats1").click(function(){
    $("#maroonsweats").hide("red.png").attr("src", "maroonsweats1.jpg").fadeIn(1000)
    });
    $("#maroonsweats2").click(function(){
    $("#maroonsweats").hide("maroonsweats1.jpg").attr("src", "maroonsweats2.jpg").fadeIn(1000)
    });
    
    $("#sweats1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });
    
    $("#sweats2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });
    $("#shorts1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });
    $("#shorts2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });
    
    $("#redsweats1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#redsweats2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#yellowshorts1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#yellowshorts2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#whitesweats1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#whitesweats2").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#maroonsweats1").on({
        mouseenter: function(){
            $(this).css("opacity", "100%");
            $(this).css("border", "solid gold");
        },
        mouseleave: function(){
            $(this).css("opacity", "50%");
            $(this).css("border", "none");
        },
    });

    $("#maroonsweats2").on({
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