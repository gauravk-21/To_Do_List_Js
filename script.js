const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const DisplayToDoList = document.getElementById('DisplayToDoList');


//function to add todolist
const addToDoList =()=>
{
    const inputText=inputBox.value.trim();
    if(inputText.length<=0)
    {
        alert("plz add your to do");
        return false;                 // if we not add any task alter msg will print and do not add any <li> element 
    }

    // Below is DOM 
    // so we can create the tag using the js 

    // create p tag
    const li = document.createElement("li");
     li.className = "d-flex align-items-center justify-content-between p-3 mb-2 bg-light rounded";
    const p =  document.createElement("p");
    p.innerHTML=inputText;
    li.appendChild(p);

     

   //create delete buttton
   const deleteBtn= document.createElement("button");
   deleteBtn.innerHTML ="Remove";
   li.appendChild(deleteBtn);



    DisplayToDoList.appendChild(li);
    inputBox.value="";                  // it will make input box empty after adding new to do list, it pass emptyString 


    saveData(inputText);
}

//function to update : Delete/edit
const updateToDoList =(e)=>
{
  if(e.target.innerHTML==="Remove")
  {
    DisplayToDoList.removeChild(e.target.parentElement);
    saveData();
  }
}


// to store the data local
const saveData=()=>
{
    localStorage.setItem("data",DisplayToDoList.innerHTML)
}


//after refreshering the browser
const showData=()=>
{
    DisplayToDoList.innerHTML=localStorage.getItem("data")
}
showData();




addBtn.addEventListener('click',addToDoList)   // addToDoList-- we have created function 
                                               //  when you click on Add button (addBtn) the input will display using the addToDoList function


DisplayToDoList.addEventListener('click',updateToDoList)

