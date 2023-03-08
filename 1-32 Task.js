// Task 1
$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
//   Task 2
$(document).on("contextmenu",function(e){
    e.preventDefault();
});
// Task 3
function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);
// Task 4
$(document).ready(function(){
    $("tr:odd").addClass("zebra");
});
// Task 5
$('a.printPage').click(function(){
    window.print();
    return false;
});
// Task 6
$('p').each(function(){
    var pdata = $(this);
    pdata.html( pdata.text().replace(/(^\w+)/,'$1') );
});
// Task 7
function new_div() {
    $(document).ready(function() {
      var test = {
        id: "div",
        class: "divclass",
        css: {
          "color": "Green"
          
        }
      };
      var $div = $("<div>", test);
      $div.html("Magiccccccc");
      $("body").append($div);
    });
    }
    // Task 8
    function moveButton(elem){
        if( $(elem).parent().attr("id") == "nonSelected" ){
            $(elem).detach().appendTo('#selected');
        }
        else{
            $(elem).detach().appendTo('#nonSelected'); 
        }
    }
    // Task 9
    function new_element(){
        $("#header ul").append('<li>Facebook</li>');
        }
// Task 10
function Remove_options()
{
$('#myColor')
    .empty()
    .append('<option selected="selected" value="test">Sujal</option>');
}
// Task 11
$('p').each(function() {

    var text_words = $(this).text().split(' ');
    
        $(this).empty().html(function() {
    
            for (i = 0; i < text_words.length; i++) {
                if (i === 0) {
                    $(this).append('<span>' + text_words[i] + '</span>');
                } else {
                    $(this).append(' <span>' + text_words[i] + '</span>');
                }
            }
        
        });
    
    });
    // Task 12
    function remove_classes()
{
$("#item").removeClass();
}
// Task 13
function remove_style() {
    $("#MyInput").css("border", "0");
}
    // Task 14
    $(document).on("contextmenu", ".element", function(e){
        console.log('Right Mouse Clicked!');
        return false;
     });
     
     $(document).on('click', '.element', function(){
      console.log('Left Mouse Clicked!');
     });
    //  Task 15
    $(document).keypress(function(e) {
        if(e.which == 13) {
            console.log('You pressed enter!');
        }
    });
    // Task 16
    $.fn.rowCount = function() {
        return $('tr', $(this).find('tbody')).length;
    };
    
    $.fn.columnCount = function() {
        return $('th', $(this).find('tbody')).length;
    };
    var
    
    rowctr = $('#table1').rowCount();
    var colctr = $('#table1').columnCount();
    
    console.log('No of Rows:'+rowctr);
    console.log('No of Columns:'+colctr);
    // Task 17
    var text = $('textarea#mytextarea').val();  
    console.log(text);
    // Task 18
    $('#myForm').submit(function() {
        var values = $(this).serialize();
        console.log(values);
      });
    //   Task 19
    var left_position = $("#name2").offset().left - $(document).scrollTop();
console.log('Left: '+left_position);

var top_position = $("#name2").offset().top - $(document).scrollTop();
console.log('Right: '+top_position);
// Task 20 no
// Task 21
$('#GFG_UP')
.text('Click the button to serialize the object to query string');
var data = {
param1: 'val_1',
param2: 'val_2',
param3: 'val_3'
};
$('#GFG_UP2').text(JSON.stringify(data));
$('button').on('click', function() {
var result = $.param(data);
$('#GFG_DOWN').text(result);
});
// Task 22
$('#name1').on('input', function() {
    console.log('New First name added');
    });
    // Task 23
    var y = ['Red', 'Green', 'White', 'black', 'Yellow'];
var remove_Item = 'White';

console.log('Array before removing the element = '+y);
y = $.grep(y, function(value) {
  return value != remove_Item;
});
console.log('Array after removing the element = '+y);
// Task 24
$("#button1").prop('value', 'Save');
// Task 25
var myOptions = {
    val1 : 'Blue',
    val2 : 'Orange'
};
var mySelect = $('#myColors');
$.each(myOptions, function(val, text) {
    mySelect.append(
        $('<option></option>').val(val).html(text)
    );
});
// Task 26
css('background-image',
 'url("https://www.w3resource.com/includes/jquery-images/jquery.gif")');
//  Task 27
$(document).ready(function(){ 
    $('#button1').click(function(){ 
      $("#myTable").find("tr:gt(0)").remove();
    });
  });   
// Tak 28
$(document).ready(function(){ 
    $('#button1').click(function(){ 
     console.log($('#op2').val());
     console.log($('#op4').val());
    console.log($('#ddid :selected').text());
     });
  });
// Task 29
$(document).ready(function(){ 
    $('#button1').click(function(){ 
    $("a").removeAttr('href');    
     });
  });
//   Task 30
$(document).ready(function(){ 
    $('#button1').click(function(){   $('#pid').removeClass('center').addClass('large');       
     });
  });
//   Task 31
$(document).ready(function(){ 
    $('#button1').click(function(){   $('#pid').addClass('large');       
     });
  });
//   Task 32
var count = $("#selected p").length;
console.log(count);
// TAsk 32
$(document).ready(function(){
    $("p").text("The DOM is now loaded and can be manipulated.");
});
  


