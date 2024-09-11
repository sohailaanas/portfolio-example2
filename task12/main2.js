//var
var x = 5;
var y = 10;
if(y>x){
    var x = 10;
}
document.getElementsByClassName("h33")[0].innerHTML="the value of x = "+x;

//let
var x = 5;
var y = 10;
if(y>x){
    let x = 10;
}
document.getElementsByClassName("h33")[1].innerHTML="the value of x = "+x;
//const
/*const num = 8;
if(num=8){
    let num = 10
}
document.getElementsByClassName("h33")[2].innerHTML="the value of x = "+x;
*/

//method in object
var human={name:"sohaila",country:"Egypt",age:19}
document.getElementsByClassName("h33")[3].innerHTML=human.name;


//this
//1-global
document.getElementsByClassName("h33")[4].innerHTML=this;

//2-object
var human={name:"sohaila",country:"Egypt",location:
function(){
    return this.name +" lives in " + this.country
}
}
document.getElementsByClassName("h33")[5].innerHTML=human.location();
//function
function first(){
    return this;
}
document.getElementsByClassName("h33")[6].innerHTML=first();
//event


//hoisting
x=5;
document.getElementsByClassName("h33")[7].innerHTML= "x = "+x;
var x;
//add string to number
//Number with Number
document.getElementsByClassName("h33")[8].innerHTML= 10+10;
//number with number with string
document.getElementsByClassName("h33")[9].innerHTML= 10+10+"10";
//string with number
document.getElementsByClassName("h33")[10].innerHTML= '10'+10;
