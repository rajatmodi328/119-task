// TAsk 34
$(document).ready(function(){
    $("p").click(function(){
        $(this).slideUp();
    });
});
// Task 35
$(document).ready(function(){
    $("p1").dblclick(function(){
        $(this).slideUp();
    });
});
// Task 36
$(document).ready(function(){
    $("p2").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
});
// Task 39
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keypress(function(){
        $("span").text(i += 1);
        $("p3").show().fadeOut();
    });
});
// Task 40
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keydown(function(){
        $("span").text(i += 1);
        $("p4").show().fadeOut();
    });
});
// Task 41
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keyup(function(){
        $("span").text(i += 1);
        $("p5").show().fadeOut();
    });
});
// Task 42
$(document).ready(function(){
    $("select").change(function(){
        var selectedOption = $(this).find(":selected").val();
        alert("You have selected - " + selectedOption);
    });
});
// Task 43
$(document).ready(function(){
    $("input").focus(function(){
        $(this).next("span1").show().fadeOut("slow");
    });
});
// Task 44
$(document).ready(function(){
    $("input").blur(function(){
        $(this).next("span").show().fadeOut("slow");
    });
});
// Task 45
$(document).ready(function(){
    $("form").submit(function(event){
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#firstName").val();
        if(regex.test(currentValue) == false){
            $("#result").html('<h7 class="error">Not valid!</h7>').show().fadeOut(1000);
            event.preventDefault();
        }
    });
});
// Task 46
$(document).ready(function(){
    $(window).resize(function() {
        $(window).bind("resize", function(){ 
            $("p8").text("Window width: " + $(window).width() + ", " + "Window height: " + $(window).height());
        });
    });
});
// Task 47
$(document).ready(function(){
    $(window).scroll(function() {
        $("p9").show().fadeOut("slow");
    });
});
// Task 49
$(document).ready(function(){
    // Hide displayed paragraphs with different speeds
    $(".hide-btn").click(function(){
        $("p10.normal").hide();
        $("p10.fast").hide("fast");
        $("p10.slow").hide("slow");
        $("p10.very-fast").hide(50);
        $("p10.very-slow").hide(2000);
    })
      // Show hidden paragraphs with different speeds
      $(".show-btn").click(function(){
        $("p10.normal").show();
        $("p10.fast").show("fast");
        $("p10.slow").show("slow");
        $("p10.very-fast").show(50);
        $("p10.very-slow").show(2000);
    });
});
// Task 50
$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-btn").click(function(){
        $("p11").toggle();
    });
});
// TAsk 51
$(document).ready(function(){
    // Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p12.normal").toggle();
        $("p12.fast").toggle("fast");
        $("p12.slow").toggle("slow");
        $("p12.very-fast").toggle(50);
        $("p12.very-slow").toggle(2000);
    });
});
// Task 52
$(document).ready(function(){
    // Fadeing out displayed paragraphs
    $(".out-btn").click(function(){
        $("p13").fadeOut();
    });
    
    // Fading in hidden paragraphs
    $(".in-btn").click(function(){
        $("p13").fadeIn();
    });
});
// TAsk 53
$(document).ready(function(){
    // Fading out displayed paragraphs with different speeds
    $(".out-btn").click(function(){
        $("p13.normal").fadeOut();
        $("p13.fast").fadeOut("fast");
        $("p13.slow").fadeOut("slow");
        $("p13.very-fast").fadeOut(50);
        $("p13.very-slow").fadeOut(2000);
    });
    
    // Fading in hidden paragraphs with different speeds
    $(".in-btn").click(function(){
        $("p13.normal").fadeIn();
        $("p13.fast").fadeIn("fast");
        $("p13.slow").fadeIn("slow");
        $("p13.very-fast").fadeIn(50);
        $("p13.very-slow").fadeIn(2000);
    });
});
// Task 54
$(document).ready(function(){
    // Fade Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p15.normal").fadeToggle();
        $("p15.fast").fadeToggle("fast");
        $("p15.slow").fadeToggle("slow");
        $("p15.very-fast").fadeToggle(50);
        $("p15.very-slow").fadeToggle(2000);
    });
});
// TAsk 55
$(document).ready(function(){
    // Fade Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p16.normal").fadeToggle();
        $("p16.fast").fadeToggle("fast");
        $("p16.slow").fadeToggle("slow");
        $("p16.very-fast").fadeToggle(50);
        $("p16.very-slow").fadeToggle(2000);
    });
});
// Task 56
$(document).ready(function(){
    // Fade to paragraphs with different opacity
    $(".to-btn").click(function(){
        $("p17.none").fadeTo("fast", 0);
        $("p17.partial").fadeTo("slow", 0.5);
        $("p17.complete").fadeTo(2000, 1);
    });
});
// TAsk 57
$(document).ready(function(){
    // Slide up displayed paragraphs
    $(".up-btn").click(function(){
        $("p18").slideUp();
    });
    
    // Slide down hidden paragraphs
    $(".down-btn").click(function(){
        $("p18").slideDown();
    });
});
// TAsk 58
$(document).ready(function(){
    // Toggles paragraphs display with sliding
    $(".toggle-btn").click(function(){
        $("p19").slideToggle();
    });
});
// Task 59
$(document).ready(function(){
    // Toggles paragraphs display with sliding
    $(".toggle-btn").click(function(){
        $("p20").slideToggle();
    });
});
// Task 60
$(document).ready(function(){
    // Toggles paragraphs display with sliding
    $(".toggle-btn").click(function(){
        $("p20").slideToggle();
    });
});
// Task 61
$(document).ready(function(){
    $("button").click(function(){
        $("img").animate({
            left: 300
        });
    });
});
// TAsk 62
$(document).ready(function(){
    $("button").click(function(){
        $(".box").animate({
            width: "300px",
            height: "300px",
            marginLeft: "150px",
            borderWidth: "10px",
            opacity: 0.5
        });
    });
});
// Task 63
$(document).ready(function(){
    $("button").click(function(){
        $(".box1")
            .animate({width: "300px"})
            .animate({height: "300px"})
            .animate({marginLeft: "150px"})
            .animate({borderWidth: "10px"})
            .animate({opacity: 0.5});
    });
});
// TAsk 64
$(document).ready(function(){
    $("button").click(function(){
        $(".box2").animate({            
            top: "+=50px",
            left: "+=50px",
            width: "+=50px",
            height: "+=50px"
        });
    });
});
// TAsk 65
$(document).ready(function(){
    $("button").click(function(){
        $(".box3").animate({
            width: 'toggle'
        });
    });
});
// Task 66
$(document).ready(function(){
    $(".start").click(function(){
        $("p21").animate({width: "100%"}).animate({fontSize: "46px"}).animate({borderWidth: 30});
    });
    $(".reset").click(function(){
        $("p21").removeAttr("style");
    });
});  
// Task 67
$(document).ready(function(){
    $(".start").click(function(){
        $("p23")
            .animate({width: "100%"})
            .animate({fontSize: "46px"})
            .animate({borderWidth: 30});
    });
    $(".reset").click(function(){
        $("p23").removeAttr("style");
    });
}); 
// Task 68
$(document).ready(function(){
    $("button").click(function(){
        // This will work
        $("h1").html("Hello World!").addClass("test").fadeOut(1000);
        
        // This will NOT work
        $("p24").html().addClass("test");
    });
});
// TAsk 69
$(document).ready(function(){
    $("button").click(function(){
        $("p25").slideToggle("slow", function(){
            alert("The slide toggle effect has completed.");
        });
    });   
});
// TAsk 70
$(document).ready(function(){
    $("button").click(function(){
        $("p26").slideToggle("slow", function(){
            alert("The slide toggle effect has completed.");
        });
    });   
});
// Task 71
$(document).ready(function(){
    $("button").click(function(){
        $("h11, p27").slideToggle("slow", function(){
            alert("The slide toggle effect has completed.");
        });
    });   
});
// Task 72
$(document).ready(function(){
    $(".btn-one").click(function(){
        var str = $("p28").text();
        alert(str);
    });
    $(".btn-two").click(function(){
       var str = $("p28:first").text();
       alert(str);
    });
    $(".btn-three").click(function(){
       var str = $("p28.extra").text();
       alert(str);
    });
});
// TAsk 73
$(document).ready(function(){
    $(".btn-one").click(function(){
        $("p29").text("This is demo text.");
    });
    $(".btn-two").click(function(){
        $("p29:first").text("This is another demo text.");
    });
    $(".btn-three").click(function(){
        $("p29.empty").text("This is one more demo text.");
    });
});
// Task 74
$(document).ready(function(){
    $(".btn-one").click(function(){
        var str = $("p30").html();
        alert(str);
    });
    $(".btn-two").click(function(){
        var str = $("#container").html();
        alert(str);
    });
});
// Task 75
$(document).ready(function(){
    $("button2").click(function(){
        $("body").html("<p>Hello World!</p>");
    });
});
// Task 76
$(document).ready(function(){
    $(".btn-one").click(function(){
        var str = $("a").attr("href");
        alert(str);
    });
    $(".btn-two").click(function(){
        var str = $("img#sky").attr("alt");
        alert(str);
    });
});
// Task 77
$(document).ready(function(){
    $("button").click(function(){
        $('input[type="checkbox"]').attr("checked", "checked");
    });
});
// Task 78
$(document).ready(function(){
    $("button2").click(function(){
        $("img").attr({
            "class" : "frame",
            "title" : "Hot Air Balloons"
        });
    });
});
// TAsk 79
$(document).ready(function(){
    $("button.get-name").click(function(){
        var name = $("#name").val();
        alert(name);
    });
    $("button.get-comment").click(function(){
        var comment = $("#comment").val();
        alert(comment);
    });
    $("button.get-city").click(function(){
        var city = $("#city").val();
        alert(city);
    });
});
// Task 80
$(document).ready(function(){
    $("button").click(function(){
        var text = $(this).text();
        $('input[type="text"]').val(text);
    });
});