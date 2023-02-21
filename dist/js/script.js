var selectedRow = null;


// ShowAlert
function showAlert(message,className){
     const div = document.createElement('div');
       div.className = `alert alert-${className}`;
       div.appendChild(document.createTextNode(message));
       const container = document.querySelector(".container");
       const main = document.querySelector(".main");
       container.insertBefore(div,main)
       setTimeout(()=> document.querySelector(".alert").remove(),3000);
    
}

// clear All Field
function clearAllField(){
   document.querySelector("#firstName").value= "";
   document.querySelector("#lastName").value= "";
   document.querySelector("#rollNo").value= "";

}

//Add Data
      document.querySelector("#student-form").addEventListener("click", (e) =>{
        e.preventDefault();

        // get form values
        const firstName = document.querySelector("#firstName").value;
        const lastName = document.querySelector("#lastName").value;
        const rollNo = document.querySelector("#rollNo").value;
  
        // validate
  
        if(firstName == "" || lastName == "" || rollNo == ""){
            showAlert("Please fill in all fields", "danger");
        }else{
             if(selectedRow == null){
              const list = document.querySelector("#studient-list");
              const row = document.createElement("tr");

              row.innerHTML = `
                 <td>${firstName}</td>
                 <td>${lastName}</td>
                 <td>${rollNo}</td>
                 <td>
                 <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                 <a href="#" class="btn btn-danger btn-sm delete" id="student-list">Delete</a>
              
              `;
          
              list.appendChild(row);
              selectedRow = null;
              showAlert("Student Added", "success");
             } else{
                  selectedRow.children[0].textContent = firstName;
                  selectedRow.children[1].textContent = firstName;
                  selectedRow.children[2].textContent = firstName;
                  selectedRow = null;
                  showAlert("Student Info Edited","info");
             }

             clearAllField();
             }
         
             
    
}) ;

// edit data

document.querySelector("#student-list").addEventListener("click",(e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
      selectedRow = target.parentElement.parentElement;
      document.querySelector("#firstName").value = selectedRow.children[0].textContent;
      document.querySelector("#lasttName").value = selectedRow.children[1].textContent;
      document.querySelector("#rollNo").value = selectedRow.children[2].textContent;


    }



})

// // delete data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted","danger");
  }
});

// // Object.keys(obj).forEach((key,index)=>{
// //   console.log(key,obj[key]);})

  // let resetEL = document.getElementById("reset");

  // resetEL.addEventListener("click", ()=>{
  //    alert('Delete button not yet working')
  // })

