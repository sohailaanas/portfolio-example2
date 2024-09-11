//arrow function
hello = function(){
    return "hello world";
}

//or
hello = () => "hello world";
console.log(hello());




//conditions
var degree = 90;
if(degree<=50){
   // console.log("fail");
    document.getElementById("div").innerHTML="fail";
}
else if(degree>50 && degree<=65){
   // console.log("low");
    document.getElementById("div").innerHTML="low";
}
else if(degree>65 && degree<=75){
   // console.log("good");
    document.getElementById("div").innerHTML="good";

}
else if(degree>75 && degree<=85){
   // console.log("very good")
    document.getElementById("div").innerHTML="very good"
}
else{
   // console.log("excellent")
   document.getElementById("div").innerHTML="excellent"
}


//loops
var i=0;
var sum = 0;
var num=[5,10,5,5];
for(;i<num.length;i++){
    sum+=num[i];

}
document.getElementById("div2").innerHTML="the summmation is:"+sum;


//function
function random (x,y){
    return Math.floor(Math.random()*(y-x) +x)
}
z=random(10,20)
//console.log(z);
document.getElementsByTagName("h1")[0].innerHTML=z;

//scope
var num1=10;
function add(){
    var y =20;
    var z = 30;
    return y+z;
}
document.getElementsByTagName("h1")[1].innerHTML=add();
document.getElementsByTagName("h1")[3].innerHTML=num1;

document.getElementsByTagName("h1")[2].innerHTML=y;





