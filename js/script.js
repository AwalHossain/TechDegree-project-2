/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


const perPage = 9;
const header = document.querySelector(".header");


let searchedWord = "";
let searchedList =[];
const linkList = document.querySelector('.link-list')

/*
********************************************************************
/*  parameters --> list : array of all student  page : number of page of nine student to display 
*********************************************************************
*/

var studentList = document.querySelector('.student-list');
function showPage(list, page){

 // calculate the starting index and ending index of student array position
 const startIndex = (page *perPage)-perPage;
 const endIndex =page*perPage;
 // this function returns collections of elements pointing to first index 

// clean innerHTML 
studentList.innerHTML = '';

for(let i=0; i<list.length; i++){

if(i>=startIndex && i< endIndex ){

     // this variable contains html elements 
var studentItem ='';
studentItem +=`<li class="student-item cf">
   <div class="student-details">
    <img class="avatar" src= ${list[i].picture.large} alt="Profile Picture">
    <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email} </span>
   </div>
<div class="joined-details">
 <span class="date"> ${list[i].registered.date}</span>
</div>
</li>`;

studentList.insertAdjacentHTML("beforeend", studentItem);
 
 }
 
}


}


         
  showPage(data, 1)
    
  
   
   
  



/*
**********************************************************************
*/


/* 
*****************************************************************
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
****************************************************************
*/
function addPagination(list){
  
  const numofPages = Math.ceil(list.length/perPage);
  


  linkList.innerHTML = '';

  for(let i=1; i<=numofPages; i++){
    const dom = `<li>
    
    <button>${i}</button>
      </li>`;

  linkList.insertAdjacentHTML("beforeend", dom);   
  
  }
  const firstButton = document.querySelector('.link-list button');
  firstButton.className='active'
 
  
linkList.addEventListener('click', (e)=>{
  if(e.target.tagName ==='BUTTON'){
    const click = e.target;
    const firstElement = document.querySelector('.active');
    firstElement.classList.remove= 'active';
click.className = 'active';
showPage(list, click.textContent)
   
  }
})



}
   

 
   

/*
**********************************************************************
*/


/* 
*****************************************************************

This function will create Search Bar
****************************************************************
*/



function searchBar(){
  let searchBarHTML =`<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;


header.insertAdjacentHTML('beforeend', searchBarHTML);

}
/*
**********************************************************************
*/ 


/*
**********************************************************************
Search Function return SearchedList

*********************************************************************
*/
function searchFunc(searchString){
  
 //searchedWord = document.querySelector("#search").value; 
 
 searchedList=[];  
 for(let std= 0; std < data.length; std++){
  
   let fullName ="";
   fullName =data[std].name.first;
   fullName += " ";
   fullName += data[std].name.last;

   if (fullName.toLowerCase().includes(searchString.toLowerCase())){  
     searchedList.push(data[std]);
     
     }
  }
  showPage(searchedList, 1)
 addPagination(searchedList);
}
/*
**********************************************************************
*/




// Call functions
searchBar();      // insert search bar
 // Display all students with pagination buttons and mechanism 

header.addEventListener("keyup", (e)=> {  // listener for search bar 
 addPagination(searchFunc(e.target.value));
});

addPagination(data);
