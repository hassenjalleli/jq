
// function bold()
// {
//     var x=$('#text').css("fontWeight");
//     if( x==)
//     {
//         $('#text').css("fontWeight","normal");
//     }else{
//         $('#text').css("fontWeight","bold"); 
//     }
// }
var back;
$("#supr").click(function(){
    back=$("#text").val();
    $("#text").val("");
    //<textarea  id="text">  </textarea>

})
$("#back").click(function(){
$("#text").val(back);
})

$('#bold').click(function(){
    switch($('#text').css("font-weight")){
        case "400"  :   $('#text').css("font-weight","1000");break;
        case "1000":  $('#text').css("font-weight","400"); break;
    }
})


$("#italic").click(function(){
    
    if($('#text').css("fontStyle")=='italic')
    {
        $('#text').css("fontStyle","normal");
    }else{
        $('#text').css("fontStyle","italic");
    }
}
)
// function underlined()
// {
//     var y=$('#text').css("textDecoration");
//     if(y!=='underline')
//     {
//         $('#text').css("textDecoration","underline");
//     }else{
//         $('#text').css("textDecoration","none");
//     }
// }

$('#underline').click(function(){
    
    if($('#text').css("textDecoration").slice(0,4) == "none") {
        $('#text').css('textDecoration' , 'underline')
    }else{
        $('#text').css('textDecoration' , 'none')        
    }
})

    //var sizee=$('#size');
    $("#sizee").change(function(){var c=$('#sizee').val();

    var textbox=$('#text');

    textbox.css('fontSize',c+'px');});
        
    
    
   $("#type").change(function(){
    // var type=$("#type").val;
    // var textbox2=$("#text");
    // textbox2.css('fontFamily',type);
    $("#text").css('fontFamily' , $("#type").val())
    })
   
   $("#col").change(function(){
       
       // textbox3.style.color=col;
       $("#text").css('color' , $("#col").val())

    })