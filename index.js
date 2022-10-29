const inputs = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector("#is-traingle-btn");
const outPutEl = document.querySelector("#output");



function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
   // console.log(sumOfAngles);
   return sumOfAngles;
}




function isTraingle(){
    const sumOfAngles =  calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
   if(sumOfAngles === 180){
    //console.log("Yay, The angles form a traingle");
    outPutEl.innerText = "Yay, The angles form a traingle"
   }else{
    //console.log("oh oh! The angles don't form a traingle");
    outPutEl.innerText = "oh oh! The angles don't form a traingle"
   }
    
    

    

}


isTraingleBtn.addEventListener("click", isTraingle)