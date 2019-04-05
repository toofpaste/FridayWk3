var strNum = [];
var hoverDetect = 0;
function pushNum(num){
  for(var i = 0; i <= num; i++){
    strNum.push("" + i);
  };
};

function checkNum(name){
  var holdNum = "";
  for(var x = 0; x < strNum.length; x++){
    holdNum = strNum[x];
    if(holdNum.includes("3")){
      strNum[x] = "I'm sorry, " + name + ". I'm afraid i can't do that";
    }else if(holdNum.includes("2")){
      strNum[x] = "Boop!";
    }else if(holdNum.includes("1")){
      strNum[x] = "Beep!";
    };
  };
};
function print(){
  for(var y = 0; y < strNum.length; y++){
    $('ol#print').append("<li>" + strNum[y] + "</li>");
  };
};

function reverse(num){
  for(var t = num; t >= 0; t--){
        strNum.push("" + t);
  };
};

function printRev(){
  for(var y = 0; y < strNum.length; y++){
    $('ol#reversed').append("<li>" + strNum[y] + "</li>");
  };
};

$(function(){
  $("#top").fadeIn(4000);
  $("#fade").fadeIn(2000);

  $("button").hover(function() {
    if(hoverDetect === 0){
    console.log(hoverDetect);
      $("#welcome").hide();
      $("#dont").show();
    };
    }, function(){
      if(hoverDetect === 0){
      $("#dont").hide();
      $("#welcome").show();
    };
    });
  $('#formOne').submit(function(event){
    event.preventDefault();
    hoverDetect = 1;
    $("#dont").hide();
    $("#happy").hide();
    $("#happy2").hide();
    $("#welcome").hide();
    $("#welcome2").hide();
    $("#fadeList").fadeIn(1500);
    $("#fadeRever").fadeIn(3000);
    $("#mad").fadeIn(2000);
    $("#mad2").fadeIn(2000);
      var name = $('input#name').val();
      var intNum = $('input#number').val();
      strNum = [];
      pushNum(intNum);
      checkNum(name);
      $("ol#print").empty();
      print();
      strNum = [];
      reverse(intNum);
      checkNum(name)
      $("ol#reversed").empty();
      printRev();
      name =  name.toUpperCase();
      $("#bye").text(name + ", YOU DIDN'T LISTEN").val();
      $("#bye").fadeIn(1000);





      for(var flash = 0; flash <= 50; flash++){
        $("#bye1").fadeToggle(1000);
        // $("#bye1").fadeOut(1000);
      };
      // $("#bye1").fadeIn(3000);
    });

});
