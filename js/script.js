const firstNumber=document.getElementById("firstNumber");
const secondNumber=document.getElementById("secondNumber");

function getResult(){
    const Result=Number(firstNumber.value) + Number(secondNumber.value); 
    document.getElementById("outputeResult").innerHTML=Result;
}
