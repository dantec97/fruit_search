const input = document.querySelector("#fruit");
// const suggestions = document.querySelector(".suggestions ul");
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
  let results = [];
  //filter based on input
  for(let fruit of fruits){
	//check if the input is in our fuit arr
	if (fruit.toLowerCase().includes(input.toLowerCase())){ // checking for match regardless of casing 
		results.push(fruit) // adds result if theres a match
	}
  }
  return results;
}

// const results = search();
// console.log(results);

function searchHandler(e) {
  const results = search(); // filtered results from previous function
  showSuggestions(results)
}

function showSuggestions(results, inputVal) {
  resultsDropdown.innerHTML = '';
  if (results.length > 0){
	resultsDropdown.style.display = 'block';
  
  //populate dropdown with results
  results.forEach(fruit => {
	const listItem = document.createElement('li')
	listItem.textContent = fruit;
	listItem.addEventListener('click', useSuggestion)
	resultsDropdown.appendChild(listItem)
  });
  }
  else {
	resultsDropdown.style.display = 'none'
  }
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI'){ //checking if the clicked value is in the list ,
	const selectedFruit = e.target.textContent; //get the value of the selected fruit
	input.value = selectedFruit;
	resultsDropdown.innerHTML = ''; //clear after selection
	resultsDropdown.style.display = 'none'; //hide dropdown 
  }
}

input.addEventListener("keyup", searchHandler);
resultsDropdown.addEventListener("click", useSuggestion);

