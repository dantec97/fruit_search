const input = document.querySelector("#fruit"); //selecting the fruit input
const resultsDropdown = document.querySelector(".suggestions ul"); // Dropdown for results

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];
 
function search(str) {
  const input = document.querySelector("#fruit").value;
  const results = [];
  //filter based on input
  for(let fruit of fruits){
	//check if the input is in our fuit arr
	if (fruit.toLowerCase().includes(input.toLowerCase())){ // checking for match regardless of casing 
		results.push(fruit) // adds result if theres a match
	}
  }
  return results; // return the filtered results  
}

function searchHandler(e) {
  const results = search(); // filtered results from search function
  showSuggestions(results) // show suggection based on results 
}


function showSuggestions(results, inputVal) {
  resultsDropdown.innerHTML = ''; // clear previous results
  if (results.length > 0){
	resultsDropdown.style.display = 'block'; // show the dropdown 
  
  //populate dropdown with results
  results.forEach(fruit => {
	const listItem = document.createElement('li') // create li for each fruit
	listItem.textContent = fruit; // setting the text content to the fruit
	listItem.addEventListener('click', useSuggestion) // evernt listener to listen for click and trigger useSuggestion function 
	resultsDropdown.appendChild(listItem) // append to dropdown 
  });
  }
  else {
	resultsDropdown.style.display = 'none'
  }
}

function useSuggestion(e) {
	const selectedFruit = e.target.textContent; //get the value of the selected fruit
	input.value = selectedFruit;
	resultsDropdown.innerHTML = ''; //clear after selection
	resultsDropdown.style.display = 'none'; //hide dropdown 
  }


input.addEventListener("keyup", searchHandler);
resultsDropdown.addEventListener("click", useSuggestion); 

