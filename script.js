let temparature=document.getElementById("temparature");
let mysubmit=document.getElementById("Submit");
let Fahrenheit=document.getElementById("Fahrenheitbtn");
let Celsius=document.getElementById("Celsiusbtn");
let resultelement=document.getElementById("resultelement");

mysubmit.addEventListener("click",()=>{
    if(Fahrenheit.checked){
        let tempval=parseFloat(temparature.value);
        F = (9/5)*tempval + 32;
        resultelement.textContent=F.toFixed(2) + " °F";
    }
    else if(Celsius.checked){
        let tempval=parseFloat(temparature.value)
        C = (tempval - 32) / 1.8;
        resultelement.textContent=C.toFixed(2) + " °C";;
    }
    else {
        resultelement.textContent = "Please select a conversion option.";
    }

})