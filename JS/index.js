const firstInput =document.getElementById("first");
const theTotal = document.getElementById("total");
const secondInput =document.getElementById("second");
const theNumber= 1;
firstTotalValue= Number(theTotal.value);
theTotalValue= Number(theTotal.value);
function addition(){
    theValue=Number(firstInput.value);
    theValue += theNumber;
    firstInput.value = theValue;
    firstTotalValue= Number(theTotal.value);
    firstTotalValue = theValue * 54.99;
    all= firstTotalValue + theTotalValue;
    all= all + 19;
    theTotal.value = all.toFixed(2);
}
function subtract(){
    theValue=Number(firstInput.value);
    theValue -= theNumber;
    if(theValue >=0){
    firstInput.value = theValue;
    firstTotalValue= Number(theTotal.value);
    firstTotalValue = (firstTotalValue - 54.99);
    all= firstTotalValue + theTotalValue;
    theTotal.value = firstTotalValue.toFixed(2);
   }
   if(theValue === 0){
    firstTotalValue = 0;
    theTotal.value = ( theTotalValue - firstTotalValue).toFixed(2);
   }
}
 function add(){
     theValue=Number(secondInput.value);
     theValue += theNumber;
     secondInput.value = theValue;
     theTotalValue= Number(theTotal.value);
    theTotalValue = theValue * 74.99;
    all= firstTotalValue + theTotalValue;
    all = all + 19;
    theTotal.value = all.toFixed(2);
 }
 function sub(){
    theValue=Number(secondInput.value);
    theValue -= theNumber;
    if(theValue >=0){
        secondInput.value = theValue; 
        theTotalValue= Number(theTotal.value);
        theTotalValue = theTotalValue - 74.99;
        all= firstTotalValue + theTotalValue;
        theTotal.value = theTotalValue.toFixed(2);  
    }
    if(theValue === 0){
        theTotalValue = 0;
        theTotal.value = (firstTotalValue - theTotalValue).toFixed(2); 
       }
 }
