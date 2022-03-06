'use strict'

let view= document.getElementById('pageview')
let cost= document.getElementById('cost')
let cost2= document.getElementById('cost2')

let slider= document.getElementById('price-slider')
let toggle=document.getElementById('switch-billing')
let pageviews=["10K","50K","100k","500K","1M"] 
let perMonth=[8,12,16,24,36] //an array of all the prices
// set a variable for the year to false, which is the normal monthly prices
let Yearly= false
// event listener with a function that makes the prics change as we slide- ,
// according to the value of the slider which is 0,1,2,3,4 (max=4) from the input field in html
// therefore, at position 0=8 , 1=12 and so on in the perMonth array
slider.addEventListener('input',  function(){
updateValue()
view.textContent=pageviews[slider.value]
let value= this.value*25
console.log(value)
console.log(this.value, '----', slider.value)
// 'this ' still means slider
this.style.background=`  linear-gradient(to right, 
    hsl(174, 77%, 80%) 0%,
     hsl(174, 77%, 80%)${value}%, 
     hsl(224, 65%, 95%)0%,
     hsl(224, 65%, 95%)100%)`
    ;
})
// this means each time we press the switch and the yearly is false, it should become true 
// else, it should remain false 
 toggle.addEventListener('change', function(){
if (Yearly===false){
    Yearly=true;
} else{
    Yearly=false; //i.e it shoud remiann monthly price
}
updateValue() //the function is here because each time the toggle is changed, prices should be updated automatically
 })


 function updateValue(){
     if (Yearly){
        cost.innerHTML=perMonth[slider.value] * .75 //this is to make the 25 % discountnwork each time user changes to yearly
        cost2.innerHTML=perMonth[slider.value] * .75
    } else{
        cost.innerHTML=perMonth[slider.value]
        cost2.innerHTML=perMonth[slider.value] //here the yearly is false so no disocunt, pricen will be normal
     }
 }

     
 
