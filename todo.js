const todotext = document.querySelector("#todotask");
const addbtn = document.querySelector("#addbtn");
const tasklist = document.querySelector("#list");

addbtn.addEventListener("click",()=>{
    text = todotext.value.trim();
    
    if(text == ""){
        alert("Enter your task");
    }
    else{
        const listitem = document.createElement("li");

        tasklist.appendChild(listitem);

        listitem.textContent = text;

      

        text = "";


    }
})