const categoriesEl = Array.from(document.querySelectorAll(".main__category"));
const scoreEl = Array.from(document.querySelectorAll(".main__score"));
const iconEl = Array.from(document.querySelectorAll(".main__icon"));

( async function () {
  const res = await fetch("./data.json");

  // Error Handling
    if(!res.ok) {

    const message = ` Error ${res.status} \n Something went wrong`;
    alert(message);

  } else {

    const data = await res.json();

    // Updating Categories
      for ( i in categoriesEl ) {
        categoriesEl[i].insertAdjacentHTML("beforeend", data[i].category)
        
    }
  
      // Updating Scores
    for ( j in scoreEl ) {
      scoreEl[j].textContent = data[j].score;
    }
    
    // Updating Icons

    for ( k in iconEl ) {
      iconEl[k].setAttribute("src", `${data[k].icon}`)
    }
  } 
  
} () );