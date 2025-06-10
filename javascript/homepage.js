var message =['DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798', 
    'DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379' , 
    'DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79'];
var random = Math.floor((Math.random())*message.length);

function randomPromoMsg(){
   
    document.getElementById("promoMsg").innerHTML = message[random];
}



function init(){
    randomPromoMsg();
    loadVideo();
    
    setInterval(function(){
        
        if(random<3){
            document.getElementById("promoMsg").innerHTML = message[random];
        }else{
            random = 0;
            document.getElementById("promoMsg").innerHTML = message[random];
        }
        console.log(random)
        random++
        
    }, 3000);
   
}

function loadVideo(){
    
    document.getElementById('vid').setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4");
    video = document.getElementById('vid');
    video.onended = function loadNext() {
        if (document.getElementById('vid').getAttribute("src") == "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4"){
            document.getElementById('vid').setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4"); 
        }else{
            document.getElementById('vid').setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4");
        }
        
    };

}    


function checkInput(){
    var inputDate = document.forms["booking"]["bookDate"].value;
    var inputTime = document.forms["booking"]["bookTime"].value;
    var inputVisitors = document.forms["booking"]["visitors"].value;
    
    if(inputDate == ""|| inputTime == "" || inputVisitors == ""){
        document.querySelector("#warning").style.display="block"; //display the message 
    }else{
        document.querySelector("#warning").style.display="none"; //hide the message 
        var reserved = reserve(inputDate, inputTime, inputVisitors);
/*LINK THIS !!!https://personal.cs.cityu.edu.hk/~cs2204/cs2204cw3.js*/ 
        if (reserved ==true){
            alert ("Reservation done. Thank you.")
        }else{
            alert("Disneyland has reached the maximum number of visitors for the day")
        }
    }
}


function reserve(date, time, no) {
    if (arguments.length !=3) {
      alert("incorrect arguments detected");
      return;
    }
    if (Math.floor(Math.random()*2) == 0) return false
    else return true;
  }
