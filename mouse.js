$(document).ready(function () {
    
    $("div").mouseover(function () {  /* membuat efek mouse */
        
        $("div").css({
            "background": "red",
        });
    });

    $("div").mouseleave(function () { 
        
        $("div").css({
            "background": "blue",
        });
    });
});