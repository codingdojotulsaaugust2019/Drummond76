$('document').ready(function(){
$(".slideUp").click(function(){
    $(".slideUp").slideUp();
})
$(".slideDown").click(function(){
    $(".slideToggle").slideDown();
})
$(".slideToggle").click(function(){
    $(".slideToggle").slideToggle();
})
var count=0;
$(".append").click(function(){
    $(".append").append("Error404");
    count+=1;
    console.log(count);
    if(count>=3){
        $('button.append').text("OK stop clicking!");
    }
})
$(".header h1").click(function(){
    $(this).html('Srsly...');
})
$(".picture").click(function(){
    $("img").attr("src","./srsly.gif");
})
$('.fun').click(function(){
    var value=$("input#birthday").val();
    console.log(value);
})
})