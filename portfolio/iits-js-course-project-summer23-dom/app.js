// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example: 
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attrib

//Bg image change
let changeColorVar= document.getElementById("iits-bg");
changeColorVar.classList.remove("bg-danger");
changeColorVar.style.backgroundColor= "skyblue";

//copy right msg
document.getElementById("iits-cr-msg").textContent="Do not copy";

//image change
let img = document.getElementById("iits-img");
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5m-ZOC5OZIL8542CSKsMwqrixiusGAojzA&usqp=CAU"

let changColorVar= document.getElementById("iits-btn");
changColorVar.classList.remove("btn-danger");
changColorVar.style.backgroundColor= "skyblue";

//let changeTxtVar= document.getElementById("iits-name");
//changeTxtVar.classList.remove("text-danger");
//multiple class remove by using forEach
let cngTxt = document.querySelectorAll('*');

cngTxt.forEach((cngTxt) => {
    cngTxt.classList.remove('text-danger');
});
//name

document.getElementById("iits-name").textContent="Rijuana Rahman";
document.getElementById("iits-name").style.color="skyblue";
document.getElementById("iits-prof").textContent="student";
document.getElementById("iits-prof").style.color="skyblue";
document.getElementById("iits-edu").textContent="second year";
document.getElementById("iits-edu").style.color="skyblue";
document.getElementById("iits-study").textContent="CSE";
document.getElementById("iits-study").style.color="skyblue";
document.getElementById("iits-school").textContent="IUBAT";
document.getElementById("iits-school").style.color="skyblue";
document.getElementById("iits-passion").textContent="Web Development";
document.getElementById("iits-passion").style.color="skyblue";
document.getElementById("iits-numYears").textContent="two years";
document.getElementById("iits-numYears").style.color="skyblue";
document.getElementById("iits-hobby").textContent="coading";
document.getElementById("iits-hobby").style.color="skyblue";
document.getElementById("iits-crc").textContent="passionate and steady";
document.getElementById("iits-crc").style.color="skyblue";
document.getElementById("iits-ability").textContent="achieve my targets";
document.getElementById("iits-ability").style.color="skyblue";
document.getElementById("iits-goal").textContent="be an engineer";
document.getElementById("iits-name").style.color="skyblue";
//fb
let link = document.getElementById("iits-fb-link");
link.href="https://www.facebook.com/rijuanarahaman.anika";

//mail
var a = document.querySelector('a[href="mailto:yourmail@gmail.com"]');
if (a) {
  a.setAttribute('href', 'rijuanaanika22@mail.com');
}
//github
var b = document.querySelector('a[href="https://github.com/yourProfile"]');
if (b) {
  b.setAttribute('href', 'https://github.com/rijuanaanika');
}


