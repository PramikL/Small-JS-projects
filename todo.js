// so these accesses the html fields based on their id
const todotext = document.querySelector("#todotask");
const addbtn = document.querySelector("#addbtn");
const tasklist = document.querySelector("#list");

// so when the add button is clicked
addbtn.addEventListener("click",()=>{
    text = todotext.value.trim(); // the data or value inside the todotask is stored in the text.
    
    if(text == ""){
        alert("Enter your task");
    }
    else{
        const listitem = document.createElement("li");  //so this creates a new <li></li> in the html
        const deletebtn = document.createElement("button");//so this creates a new <button></button> in the html

        tasklist.appendChild(listitem); //here the created <li> is added inside the tasklist
        listitem.textContent = text;  //here the data entered in the todotask input field is added inside the li,i.e <li>text</list>

        tasklist.appendChild(deletebtn); //here the created <button> is added inside the tasklist
        deletebtn.textContent = "Delete"; //i.e <button>Delete</button>
        
        todotext.value = ""; // the todotask is emptied, so that the new task to be entered.
        text = ""; // the text variable is emptied, to store the new task.
        

        deletebtn.addEventListener("click",()=>{   // when the delete button is clicked
            tasklist.removeChild(listitem);  // it removes the listitem from the tasklist
            tasklist.removeChild(deletebtn); //it removes the deletebtn from the tasklist
        })


    }
})