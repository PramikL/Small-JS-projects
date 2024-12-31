const numberbtn = document.querySelectorAll("[data-value]"); // it dynamically lets us access all the number s
let btnsum = document.querySelector("#sum");
let btnsub = document.querySelector("#sub");
let btnmul = document.querySelector("#mul");
let btndiv = document.querySelector("#div");
let btnequal = document.querySelector("#equal");
let btnresult = document.querySelector("#result");
const btnclear = document.querySelector("#clear");

let currentvalue = "";

let operator = null;

let firstnumber = null;

numberbtn.forEach((button)=>{ //it adds a single event listener to each button.
    button.addEventListener("click",()=>{
        currentvalue += button.getAttribute("data-value"); // Use getAttribute("data-value") to retrieve the button's value, avoiding repetitive code.
        btnresult.innerText = currentvalue;
        console.log("Current value:",currentvalue);
    })
})

btnsum.addEventListener("click",()=>{
    if(currentvalue!=""){
        firstnumber=Number(currentvalue);
        console.log("firstnumber:",firstnumber);
    }
    operator = "+";
    btnresult.innerText = operator;
    currentvalue = "";
})

btnsub.addEventListener("click",()=>{
    if(currentvalue!=""){
        firstnumber=Number(currentvalue);
        console.log("firstnumber:",firstnumber);
    }
    operator = "-";
    btnresult.innerText = operator;
    currentvalue = "";
})

btnmul.addEventListener("click",()=>{
    if(currentvalue!=""){
        firstnumber=Number(currentvalue);
        console.log("firstnumber:",firstnumber);
    }
    operator = "*";
    btnresult.innerText = operator;
    currentvalue = "";
})

btndiv.addEventListener("click",()=>{
    if(currentvalue!=""){
        firstnumber=Number(currentvalue);
        console.log("firstnumber:",firstnumber);
    }
    operator = "/";
    btnresult.innerText = operator;
    currentvalue = "";
})

btnequal.addEventListener("click",()=>{
    if(currentvalue !="" && firstnumber!="" ){
        let secondnumber = Number(currentvalue);
        if(operator==="+"){
            let result = firstnumber + secondnumber;
            btnresult.innerText = result;
            }
            if(operator==="-"){
                let result = firstnumber - secondnumber;
                btnresult.innerText = result;
                }
                if(operator==="*"){
                    let result = firstnumber * secondnumber;
                    btnresult.innerText = result;
                    }
                    if(operator==="/"){
                        let result = firstnumber / secondnumber;
                        btnresult.innerText = result;
                        }

    }
})
btnclear.addEventListener("click",()=>{
    btnresult.innerText = "";
    currentvalue = "";
    operator = "";
    firstnumber = "";
})