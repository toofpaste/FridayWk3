var strNum = [];
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
  $("#top").fadeToggle(4000);
  $("#fade").fadeToggle(2000);
  $('#formOne').submit(function(event){
      event.preventDefault();
      $("#fadeList").fadeToggle(1500);
      $("#fadeRever").fadeToggle(3000);
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
    });

});
