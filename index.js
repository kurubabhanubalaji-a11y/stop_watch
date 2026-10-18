const display = document.getElementById("time");
var i=0;
var j=0;
var k=0;
var d=0;
var b=true;
var c=true;
var timer=null;


var running=false;

function change(){
  
   
  
   if (c==false){
    return;
   }
   if (b ){

        i++;
        j=Math.floor(i/60);
        k=Math.floor(j/60);
        d=Math.floor(k/24);
        if(i%60 <10 || j%60 <10 || k%24<10 ){
          n1="";
          n2="";
          n3="";
          if (i%60 <10){
            n1="0";

          }
          if(j%60 < 10 ){
            n2="0";
          }
          if (k%24 <10){
            n3="0";
          }

          display.textContent = `${d}:${n3+k%24}:${n2+j%60}:${n1+i%60}`;

        }
        else{
          display.textContent=`${d}:${k%24}:${j%60}:${i%60}`;
        }




        
        
        
      }

      if (running){
         timer =setTimeout(change,1000);
      }

      
}
const btn = document.getElementById('start');

  btn.onclick = function() {
    if(running){
      return;
    }
    running=true;
    b=true;
    c=true;

    console.log("clicked");
    timer = setTimeout(change,1000);

    
    
};
const btn2= document.getElementById('stop');{
  btn2.onclick= function(){
    running=false;
    console.log("clickede stop");
    b=false;
    clearTimeout(timer);
    timer = null;

  }
}
const btn3 =document.getElementById('reset');{
  btn3.onclick = function(){
    console.log("reset clicked");
    running=false;

    b=false;
    i=0;
    j=0;
    k =0;
    d=0;
    c=false;
    clearTimeout(timer);
    timer = null;
    display.textContent=`${d}:0${k%24}:0${j%60}:0${i%60}`;
  
  }
}