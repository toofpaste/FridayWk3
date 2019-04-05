var strNum = [];
function pushNum(num){
  for(var i = 0; i <= num; i++){
    strNum.push("" + i);
  };
};

function checkNum(){
  var holdNum = "";
  for(var x = 0; x < strNum.length; x++){
    holdNum = strNum[x];
    if(holdNum.includes("3")){
      strNum[x] = "I'm sorry, Dave. I'm afraid i can't do that";
    }else if(holdNum.includes("2")){
      strNum[x] = "Boop!";
    }else if(holdNum.includes("1")){
      strNum[x] = "Beep!";
    };
  };
};







$(function(){
  $('#formOne').submit(function(event){
      event.preventDefault();
      var intNum = $('input#number').val();
      pushNum(intNum);
      checkNum();
      console.log(strNum);
    });

});
