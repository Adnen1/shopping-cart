// adding all elements
var plus = document.querySelectorAll(".plusBtn");
var minus = document.querySelectorAll(".minusBtn");
var numplace = document.querySelectorAll(".numberplace");
var price = document.querySelectorAll(".money");
var hearticons = document.querySelectorAll(".heart");
var trashicons = document.querySelectorAll(".trash");
var totalprice = document.querySelector(".all");
// + AND -
for(let i = 0; i<plus.length;i++) {
    plus[i].addEventListener("click", function(){
        numplace[i].innerHTML = Number(numplace[i].innerHTML) + 1;
       tprice();
    });
    minus[i].addEventListener("click", function(){
        if(numplace[i].innerHTML > 0) {
        numplace[i].innerHTML = Number(numplace[i].innerHTML) -1;
        }
        tprice();
    });
};
// Trash
for ( let i = 0; i<trashicons.length; i++) {
    trashicons[i].addEventListener("click", function(){
        trashicons[i].parentElement.parentElement.parentElement.remove()
    })
}
// heart
for (let i=0; i<hearticons.length; i++) {
    hearticons[i].addEventListener("click", function(){ 
          
     if (hearticons[i].style.color !="red") {
        hearticons[i].style.color="red"; 
     } else {
        hearticons[i].style.color="black";
     }    
    });
};
// adding total prices in an input 
function tprice(){
    let sum = 0;
    for(i=0; i< numplace.length;i++){
        sum=
        Number(numplace[i].innerHTML) * Number(price[i].innerHTML)+sum;
        totalprice.innerHTML=sum;
    }
  
}