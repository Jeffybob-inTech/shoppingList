const closeButtonForShoppingListItemBtn = document.getElementById("closeButtonForShoppingListItemBtn")
const shoppingListPriceInput = document.getElementById("shoppingListPriceInput")
const nameForShoppingListItemEl = document.getElementById("nameForShoppingListItemEl")
const categoriesForShoppingListInput = document.getElementById("categoriesForShoppingListInput")
const shoppingListItemHolder = document.getElementById("shoppingListItemHolder")
const shoppingListItem1Cn = document.getElementById("shoppingListItem1Cn")
const shoppingListItemInput = document.getElementById("shoppingListItemInput")
const totalAmountBeingSpentThisMonthEl = document.getElementById("totalAmountBeingSpentThisMonthEl")
const shoppingListItem = document.getElementById("shoppingListItem")
const addItemBtn = document.getElementById("addItemBtn")
const doubleItemEl = document.getElementById("doubleItemEl")
const doubplicateItemEl = document.getElementById("doubplicateItemEl")
const mustInputAnItemEl = document.getElementById("mustInputAnItemEl")
const youMustHaveThisSpecificItemEl = document.getElementById("youMustHaveThisSpecificItemEl")
const clearAllForShoppingListButton = document.getElementById("clearAllForShoppingListButton")
const clearListWarningEl = document.getElementById("clearListWarningEl")
const pastItemsForShoppingCartCn = document.getElementById("pastItemsForShoppingCartCn")
const clearPastSearchesWaringEl = document.getElementById("clearPastSearchesWaringEl")
const recoverPastItemForShoppingListBtn = document.getElementById("recoverPastItemForShoppingListBtn")
//const dataSearchThroughShoppingListInput = document.getElementById("[data-search-for-shopping-list-input")
const clearPastSearchesBtn = document.getElementById("clearPastSearchesBtn")
const aVsAnForShoppingListInputsEl = document.getElementById("aVsAnForShoppingListInputsEl")
let redoItemsTakenOutOfShoppingList = []
let previousItemsInShoppingList;
try{previousItemsInShoppingList = JSON.parse(localStorage.getItem("previousItemsSearched"))}
catch(error){previousItemsInShoppingList =[]}//all items they have put in their shopping list (for the past 6 shopping lists)
let prevoiusItemsInShoppingListFilterd = []// = ["Just", "Some just checking", "example spaces", " items","Even ","More","examples","to","show","the","limit","of","this","thingy"];//just don't show items already in this shopping list use .filter filter[i] !== list[x]
let listOfShoppingListItems;
try{listOfShoppingListItems = JSON.parse(localStorage.getItem("shoppingListItems"))}
catch(error){listOfShoppingListItems = []}

if(previousItemsInShoppingList !== null){
for(let i = 0; i<previousItemsInShoppingList.length; i++){
  prevoiusItemsInShoppingListFilterd.push(previousItemsInShoppingList[i])
}
console.log(prevoiusItemsInShoppingListFilterd)
console.log(listOfShoppingListItems)
for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
  for(let x = 0; x<prevoiusItemsInShoppingListFilterd.length; x++){
    if(prevoiusItemsInShoppingListFilterd[i]==prevoiusItemsInShoppingListFilterd[x] && i!=x){
      console.log(prevoiusItemsInShoppingListFilterd[x])
      console.log(prevoiusItemsInShoppingListFilterd[i])
      prevoiusItemsInShoppingListFilterd.splice(prevoiusItemsInShoppingListFilterd.indexOf(prevoiusItemsInShoppingListFilterd[i]),1)
    }
  }
}
for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
  for(let x = 0; x<prevoiusItemsInShoppingListFilterd.length; x++){
    if(prevoiusItemsInShoppingListFilterd[i]==prevoiusItemsInShoppingListFilterd[x] && i!=x){
      console.log(prevoiusItemsInShoppingListFilterd[x])
      console.log(prevoiusItemsInShoppingListFilterd[i])
      prevoiusItemsInShoppingListFilterd.splice(prevoiusItemsInShoppingListFilterd.indexOf(prevoiusItemsInShoppingListFilterd[i]),1)
    }
  }
}
}
console.log(listOfShoppingListItems)
console.log(prevoiusItemsInShoppingListFilterd)

console.log(prevoiusItemsInShoppingListFilterd)
let totalAmountBeingSpentOnThisShoppingList = 0;
function onLoadShopExsistingItems() {
if(listOfShoppingListItems.length != null){
  for(let i = 0; i<listOfShoppingListItems.length; i +=3){
    var newListItem = document.createElement("div");
    newListItem.classList.add("shoppingListItem");
    shoppingListItemHolder.appendChild(newListItem);
    newListItem.setAttribute("id", "shoppingListItemNew")//also make this have an index like the thing below
    var newListItemName = document.createElement("p");
    newListItemName.classList.add("nameForShoppingListItem");
    newListItem.appendChild(newListItemName)
    newListItemName.textContent = listOfShoppingListItems[(i)];
    newListItem.setAttribute("id", "shoppingListItemNameNew")
    var newListItemPrice = document.createElement("p");
    newListItemPrice.classList.add("priceForShoppingListItem");
    newListItem.appendChild(newListItemPrice)
    newListItemPrice.textContent = "$"+listOfShoppingListItems[(i+1)];
    var newListItemCategories = document.createElement("p");
    newListItemCategories.classList.add("categoriesForShoppingList");
    newListItem.appendChild(newListItemCategories)
    newListItemCategories.textContent = listOfShoppingListItems[(i+2)]
    totalAmountBeingSpentOnThisShoppingList += Number(listOfShoppingListItems[i+1])
    if(listOfShoppingListItems[(i+2)] == "Home"){
      newListItem.style.backgroundColor = "#5B3528"
    }
    else if(listOfShoppingListItems[(i+2)] == "Food"){
      newListItem.style.backgroundColor = "#499EF3"
    }
    else if(listOfShoppingListItems[(i+2)] == "Insurance"){
      newListItem.style.backgroundColor = "#DE29F6"
    }
    else if(listOfShoppingListItems[(i+2)] == "Health"){
      newListItem.style.backgroundColor = "red"
    }
    else if(listOfShoppingListItems[(i+2)] == "Savings"){
      newListItem.style.backgroundColor = "#157F19"
    }
    else if(listOfShoppingListItems[(i+2)] == "Transportation"){
      newListItem.style.backgroundColor = "gray"
    }
    else if(listOfShoppingListItems[(i+2)] == "Utilities"){
      newListItem.style.backgroundColor = "yellow"
    }
    else if(listOfShoppingListItems[(i+2)] == "Wants"){
      newListItem.style.backgroundColor = "orange"
    }
    else{
      newListItem.style.backgroundColor = "white"
    }
    clearAllForShoppingListButton.style.display = "block"
  }
  totalAmountBeingSpentThisMonthEl.textContent = totalAmountBeingSpentOnThisShoppingList
}
}
if(listOfShoppingListItems===null){}else{
onLoadShopExsistingItems()
}
console.log(JSON.parse(localStorage.getItem("shoppingListItems")))
/*
shoppingListPriceInput.addEventListener("click", function(){
  shoppingListPriceInput.value = "$"
})*/

clearAllForShoppingListButton.addEventListener("click", function(){
  clearListWarningEl.style.display = "block"
  doubleItemEl.style.display = "none"
  mustInputAnItemEl.style.display = "none"
})
clearAllForShoppingListButton.addEventListener("dblclick", function(){
  //whoosh.play()
  redoItemsTakenOutOfShoppingList = []
  recoverPastItemForShoppingListBtn.style.display = "none"
  clearListWarningEl.style.display = "none"
  doubleItemEl.style.display = "none"
    mustInputAnItemEl.style.display = "none"
    clearAllForShoppingListButton.style.display = "none"
  totalAmountBeingSpentOnThisShoppingList = 0;
  totalAmountBeingSpentThisMonthEl.textContent = totalAmountBeingSpentOnThisShoppingList;
  listOfShoppingListItems = [];
  listOfShoppingListItems = [];
    localStorage.setItem("shoppingListItems", JSON.stringify(listOfShoppingListItems))
  for(let i = 0; i<shoppingListItemHolder.children.length; i++){
    shoppingListItemHolder.children[i].style.display = "none"
  }
})
categoriesForShoppingListInput.addEventListener("mouseleave",function(){

  categoriesForShoppingListInput.style.color= "black"
})
categoriesForShoppingListInput.addEventListener("mouseeneter",function(){

  categoriesForShoppingListInput.style.color= "white"
})
shoppingListPriceInput.addEventListener("input", function(){
  shoppingListPriceInput.value.length > 20 ? shoppingListPriceInput.value = shoppingListPriceInput.value.substring(0,20):shoppingListPriceInput.value = shoppingListPriceInput.value;
  if(shoppingListItemInput.value != ""&& shoppingListPriceInput.value != ""){
    addItemBtn.style.backgroundColor = "#157F19"
  }
  doubleItemEl.style.display = "none"
    mustInputAnItemEl.style.display = "none"
    clearListWarningEl.style.display = "none"
})
let newShoppingListPastSearches = []
console.log(newShoppingListPastSearches)
let previousValue = "";
shoppingListItemInput.addEventListener("input", function(e){
  //filtering through past searches
  shoppingListItemInput.value.length > 100 ? shoppingListItemInput.value = shoppingListItemInput.value.substring(0,100):shoppingListItemInput.value = shoppingListItemInput.value;
  const value = e.target.value
  console.log(value)
  //newShoppingListPastSearches = []
  while(pastItemsForShoppingCartCn.children.length > 0){
    console.log("removed" + pastItemsForShoppingCartCn.children[0].innerHTML)
    pastItemsForShoppingCartCn.children[0].remove();//previousSearchItem.parentNode.removeChild(previousSearchItem)//.classList.toggle("gettingRidOfItem")
   
  }
  if(value === ""){
    newShoppingListPastSearches = []
    console.log("herey")
    for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
      newShoppingListPastSearches.push(prevoiusItemsInShoppingListFilterd[i])
      var previousSearchItem = document.createElement("p");
      previousSearchItem.classList.add("previousSearchItemEl");
      previousSearchItem.textContent = newShoppingListPastSearches[i];
      pastItemsForShoppingCartCn.appendChild(previousSearchItem);
      
    }
    let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
    pastItemsForShoppingCartCn.style.display = "block"
    pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
    console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
    pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
    pastItemsForShoppingCartCn.style.opacity = "100%"
    let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
    clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
    
    clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesBtn.style.opacity = "100%";
    clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
  }
  else if(value.length < previousValue.length){
    newShoppingListPastSearches = []
    console.log("herey")
    for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
      newShoppingListPastSearches.push(prevoiusItemsInShoppingListFilterd[i])
    }
    for(let i = 0; i<newShoppingListPastSearches.length; i++){
      console.log("Checked?")
      if(newShoppingListPastSearches[i].toString().toLowerCase().includes(value.toString().toLowerCase())){
        console.log("Hereies")
        var previousSearchItem = document.createElement("p");
      previousSearchItem.classList.add("previousSearchItemEl");
      previousSearchItem.textContent = newShoppingListPastSearches[i];
      console.log(newShoppingListPastSearches[i])
      pastItemsForShoppingCartCn.appendChild(previousSearchItem);
      }
      else{
        newShoppingListPastSearches.slice(i,1)
        //pastItemsForShoppingCartCn.children[i].classList.toggle("gettingRidOfItem")
      }
    }
    let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
  pastItemsForShoppingCartCn.style.display = "block"
  pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
  console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
  pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
  clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
  pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
  pastItemsForShoppingCartCn.style.opacity = "100%"
  let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
  clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
  
  clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
  clearPastSearchesBtn.style.opacity = "100%";
  clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
  }
  else{
    console.log("here")
  for(let i = 0; i<newShoppingListPastSearches.length; i++){
    console.log("Checked?")
    if(newShoppingListPastSearches[i].toString().toLowerCase().includes(value.toString().toLowerCase())){
      console.log("Hereies")
      var previousSearchItem = document.createElement("p");
    previousSearchItem.classList.add("previousSearchItemEl");
    previousSearchItem.textContent = newShoppingListPastSearches[i];
    console.log(newShoppingListPastSearches[i])
    pastItemsForShoppingCartCn.appendChild(previousSearchItem);
    }
    else{
      newShoppingListPastSearches.slice(i,1)
      //pastItemsForShoppingCartCn.children[i].classList.toggle("gettingRidOfItem")
    }
  }
  let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
  pastItemsForShoppingCartCn.style.display = "block"
  pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
  console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
  pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
  clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
  pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
  pastItemsForShoppingCartCn.style.opacity = "100%"
  let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
  clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
  
  clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
  clearPastSearchesBtn.style.opacity = "100%";
  clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
  previousValue = value
}




  if(shoppingListItemInput.value != ""&& shoppingListPriceInput.value != ""){
    addItemBtn.style.backgroundColor = "#157F19"
  }
  doubleItemEl.style.display = "none"
    mustInputAnItemEl.style.display = "none"
    clearListWarningEl.style.display = "none"
})
//make a double click to confirm doplicates
addItemBtn.addEventListener("click", function(){
  let itemAlreadyInArray = false;
  if(listOfShoppingListItems!==null){
  for(let i = 0; i<listOfShoppingListItems.length; i +=3){
    shoppingListItemInput.value === listOfShoppingListItems[i] ? itemAlreadyInArray = true: itemAlreadyInArray;
  }
  }
  if(shoppingListItemInput.value != ""&& shoppingListPriceInput.value != ""&& !itemAlreadyInArray){
    //addItemToShoppingListAudio.play()
    if(previousItemsInShoppingList === null){
        previousItemsInShoppingList = [];
    }
    previousItemsInShoppingList.push(shoppingListItemInput.value)
    localStorage.setItem("previousItemsSearched",JSON.stringify(previousItemsInShoppingList))
    clearAllForShoppingListButton.style.display = "block"
     addItemBtn.style.backgroundColor = "gray"
     //adding and representing new total
     totalAmountBeingSpentOnThisShoppingList += Number(shoppingListPriceInput.value)
     totalAmountBeingSpentThisMonthEl.textContent = totalAmountBeingSpentOnThisShoppingList
    //getting the values and setting them to the array
    if(listOfShoppingListItems === null){
        listOfShoppingListItems = [];
    }
    listOfShoppingListItems.push(shoppingListItemInput.value)
    listOfShoppingListItems.push(shoppingListPriceInput.value)
    listOfShoppingListItems.push(categoriesForShoppingListInput.value)
    localStorage.setItem("shoppingListItems", JSON.stringify(listOfShoppingListItems))
    console.log(listOfShoppingListItems)
    //making the item
    var newListItem = document.createElement("div");
    newListItem.classList.add("shoppingListItem");
    shoppingListItemHolder.appendChild(newListItem);
    newListItem.setAttribute("id", "shoppingListItemNew")//also make this have an index like the thing below
    var newListItemName = document.createElement("p");
    newListItemName.classList.add("nameForShoppingListItem");
    newListItem.appendChild(newListItemName)
    newListItemName.textContent = shoppingListItemInput.value;
    newListItem.setAttribute("id", "shoppingListItemNameNew")
    var newListItemPrice = document.createElement("p");
    newListItemPrice.classList.add("priceForShoppingListItem");
    newListItem.appendChild(newListItemPrice)
    newListItemPrice.textContent = "$"+shoppingListPriceInput.value;
    var newListItemCategories = document.createElement("p");
    newListItemCategories.classList.add("categoriesForShoppingList");
    newListItem.appendChild(newListItemCategories)
    //var getRidOfThatItemBtn = document.createElement("button");
    //getRidOfThatItemBtn.classList.add("categoriesForShoppingList");
    //newListItem.appendChild(getRidOfThatItemBtn)
    //getRidOfThatItemBtn.setAttribute("id", "closeButtonForShoppingListItemBtn");//give an index with an array then travsre with a for loop to find which button is being clicked
    
    newListItemCategories.textContent = categoriesForShoppingListInput.value;
    if(categoriesForShoppingListInput.value == "Home"){
      newListItem.style.backgroundColor = "#5B3528"
    }
    else if(categoriesForShoppingListInput.value == "Food"){
      newListItem.style.backgroundColor = "#499EF3"
    }
    else if(categoriesForShoppingListInput.value == "Insurance"){
      newListItem.style.backgroundColor = "#DE29F6"
    }
    else if(categoriesForShoppingListInput.value == "Health"){
      newListItem.style.backgroundColor = "red"
    }
    else if(categoriesForShoppingListInput.value == "Savings"){
      newListItem.style.backgroundColor = "#157F19"
    }
    else if(categoriesForShoppingListInput.value == "Transportation"){
      newListItem.style.backgroundColor = "gray"
    }
    else if(categoriesForShoppingListInput.value == "Utilities"){
      newListItem.style.backgroundColor = "yellow"
    }
    else if(categoriesForShoppingListInput.value == "Wants"){
      newListItem.style.backgroundColor = "orange"
    }
    else{
      newListItem.style.backgroundColor = "white"
    }
    //nameForShoppingListItemEl.textContent = shoppingListItemInput.value;
    shoppingListItemInput.value = ""
    shoppingListPriceInput.value = ""
    //document.getElementById("shoppingListItemNew").style.backgroundColor = "black"
  }
  else if(shoppingListItemInput.value == ""){
    youMustHaveThisSpecificItemEl.textContent = "item"
    aVsAnForShoppingListInputsEl.textContent = "an"
    mustInputAnItemEl.style.display = "block"
  }
  else if(shoppingListPriceInput.value == ""){
    youMustHaveThisSpecificItemEl.textContent = "price"
    aVsAnForShoppingListInputsEl.textContent = "a"
    mustInputAnItemEl.style.display = "block"
  }
  else if(itemAlreadyInArray){
    doubplicateItemEl.textContent = shoppingListItemInput.value
    doubleItemEl.style.display = "block"
    //show the text to double click to confirm thing in shopping list
  }
})
addItemBtn.addEventListener("dblclick", function(){
  doubleItemEl.style.display = "none"
  if(shoppingListItemInput.value != ""&& shoppingListPriceInput.value != ""){
    //showing previous search thingy
    previousItemsInShoppingList.push(shoppingListItemInput.value)
    localStorage.setItem("previousItemsSearched",JSON.stringify(previousItemsInShoppingList))
    //addItemToShoppingListAudio.play()
    addItemBtn.style.backgroundColor = "gray"
    clearAllForShoppingListButton.style.display = "block"
    //adding and representing new total
    totalAmountBeingSpentOnThisShoppingList += Number(shoppingListPriceInput.value)
    totalAmountBeingSpentThisMonthEl.textContent = totalAmountBeingSpentOnThisShoppingList
   //getting the values and setting them to the array
   numberOfTimesItemIsPrevoiuslyInArrayForShoppingList = 0;
   for(let i = 0; i<listOfShoppingListItems.length; i+=3){
    shoppingListItemInput.value === listOfShoppingListItems[i] ? numberOfTimesItemIsPrevoiuslyInArrayForShoppingList++
      :shoppingListItemInput.value === (listOfShoppingListItems[i]).substring(0,listOfShoppingListItems[i].length-3)&& listOfShoppingListItems[i].substring(listOfShoppingListItems[i].length-3,listOfShoppingListItems[i].length-2) === "(" ||listOfShoppingListItems[i].substring(listOfShoppingListItems[i].length-4,listOfShoppingListItems[i].length-3) === "("&& listOfShoppingListItems[i].substring(listOfShoppingListItems[i].length-1) === ")" ?numberOfTimesItemIsPrevoiuslyInArrayForShoppingList++
        :numberOfTimesItemIsPrevoiuslyInArrayForShoppingList;
   }
   numberOfTimesItemIsPrevoiuslyInArrayForShoppingList > 0? listOfShoppingListItems.push(shoppingListItemInput.value + "(" + numberOfTimesItemIsPrevoiuslyInArrayForShoppingList + ")"): listOfShoppingListItems.push(shoppingListItemInput.value);
   listOfShoppingListItems.push(shoppingListPriceInput.value)
   listOfShoppingListItems.push(categoriesForShoppingListInput.value)
   localStorage.setItem("shoppingListItems", JSON.stringify(listOfShoppingListItems))
   console.log(listOfShoppingListItems)
   //making the item
   var newListItem = document.createElement("div");
   newListItem.classList.add("shoppingListItem");
   shoppingListItemHolder.appendChild(newListItem);
   newListItem.setAttribute("id", "shoppingListItemNew")//also make this have an index like the thing below
   var newListItemName = document.createElement("p");
   newListItemName.classList.add("nameForShoppingListItem");
   newListItem.appendChild(newListItemName)
   numberOfTimesItemIsPrevoiuslyInArrayForShoppingList > 0? newListItemName.textContent = shoppingListItemInput.value + "(" + numberOfTimesItemIsPrevoiuslyInArrayForShoppingList + ")": newListItemName.textContent = shoppingListItemInput.value;
   newListItem.setAttribute("id", "shoppingListItemNameNew")
   var newListItemPrice = document.createElement("p");
   newListItemPrice.classList.add("priceForShoppingListItem");
   newListItem.appendChild(newListItemPrice)
   newListItemPrice.textContent = "$"+shoppingListPriceInput.value;
   var newListItemCategories = document.createElement("p");
   newListItemCategories.classList.add("categoriesForShoppingList");
   newListItem.appendChild(newListItemCategories)
   //var getRidOfThatItemBtn = document.createElement("button");
   //getRidOfThatItemBtn.classList.add("categoriesForShoppingList");
   //newListItem.appendChild(getRidOfThatItemBtn)
   //getRidOfThatItemBtn.setAttribute("id", "closeButtonForShoppingListItemBtn");//give an index with an array then travsre with a for loop to find which button is being clicked
   
   newListItemCategories.textContent = categoriesForShoppingListInput.value;
   if(categoriesForShoppingListInput.value == "Home"){
    newListItem.style.backgroundColor = "#5B3528"
  }
  else if(categoriesForShoppingListInput.value == "Food"){
    newListItem.style.backgroundColor = "#499EF3"
  }
  else if(categoriesForShoppingListInput.value == "Insurance"){
    newListItem.style.backgroundColor = "#DE29F6"
  }
  else if(categoriesForShoppingListInput.value == "Health"){
    newListItem.style.backgroundColor = "red"
  }
  else if(categoriesForShoppingListInput.value == "Savings"){
    newListItem.style.backgroundColor = "#157F19"
  }
  else if(categoriesForShoppingListInput.value == "Transportation"){
    newListItem.style.backgroundColor = "gray"
  }
  else if(categoriesForShoppingListInput.value == "Utilities"){
    newListItem.style.backgroundColor = "yellow"
  }
  else if(categoriesForShoppingListInput.value == "Wants"){
    newListItem.style.backgroundColor = "orange"
  }
  else{
    newListItem.style.backgroundColor = "white"
  }
   //nameForShoppingListItemEl.textContent = shoppingListItemInput.value;
   shoppingListItemInput.value = ""
   shoppingListPriceInput.value = ""
   //document.getElementById("shoppingListItemNew").style.backgroundColor = "black"
  }
  else if(shoppingListItemInput.value == ""){
    youMustHaveThisSpecificItemEl.textContent = "item"
    aVsAnForShoppingListInputsEl.textContent = "an"
    mustInputAnItemEl.style.display = "block"
  }
  else if(shoppingListPriceInput.value == ""){
    youMustHaveThisSpecificItemEl.textContent = "price"
    aVsAnForShoppingListInputsEl.textContent = "a"
    mustInputAnItemEl.style.display = "block"
  }
})
//picking something from the search bar
pastItemsForShoppingCartCn.addEventListener("click",function(event){
  if (event.target.tagName.toLowerCase() === 'p') {
    shoppingListItemInput.value = event.target.innerHTML
    pastItemsForShoppingCartCn.style.display = "none"
    clearPastSearchesBtn.style.display = "none"
    clearPastSearchesWaringEl.style.display = "none"
    pastItemsForShoppingCartCn.style.opacity = "0%"
  }
})
pastItemsForShoppingCartCn.addEventListener("mouseenter",function(){
  newShoppingListPastSearches = []
  if(shoppingListItemInput.value == "" && !mouseInSearch){
    while(pastItemsForShoppingCartCn.children.length > 0){
      console.log("removed" + pastItemsForShoppingCartCn.children[0].innerHTML)
      pastItemsForShoppingCartCn.children[0].remove();//previousSearchItem.parentNode.removeChild(previousSearchItem)//.classList.toggle("gettingRidOfItem")
     
    }
    console.log("herey")
    for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
      newShoppingListPastSearches.push(prevoiusItemsInShoppingListFilterd[i])
      var previousSearchItem = document.createElement("p");
      previousSearchItem.classList.add("previousSearchItemEl");
      previousSearchItem.textContent = newShoppingListPastSearches[i];
      pastItemsForShoppingCartCn.appendChild(previousSearchItem);
      
    }
    let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
    pastItemsForShoppingCartCn.style.display = "block"
    pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
    console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
    pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
    pastItemsForShoppingCartCn.style.opacity = "100%"
    let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
    clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
    
    clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesBtn.style.opacity = "100%";
    clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
    mouseInSearch = true
  }
    pastItemsForShoppingCartCn.style.display = "block"
    pastItemsForShoppingCartCn.style.opacity = "100%"
    let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
    clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
    
    clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesBtn.style.opacity = "100%";
    clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";

})
//check for both condidtions
let mouseOnClearAllBtn = false;
let mouseInSearch = false;
let mouseInInput = false;
let inputSelected = false;//checks focus
clearPastSearchesBtn.addEventListener("mouseenter",function(){
  mouseOnClearAllBtn = true
  newShoppingListPastSearches = []
  if(shoppingListItemInput.value == "" && !mouseInInput){
    while(pastItemsForShoppingCartCn.children.length > 0){
      console.log("removed" + pastItemsForShoppingCartCn.children[0].innerHTML)
      pastItemsForShoppingCartCn.children[0].remove();//previousSearchItem.parentNode.removeChild(previousSearchItem)//.classList.toggle("gettingRidOfItem")
     
    }
    console.log("herey")
    for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
      newShoppingListPastSearches.push(prevoiusItemsInShoppingListFilterd[i])
      var previousSearchItem = document.createElement("p");
      previousSearchItem.classList.add("previousSearchItemEl");
      previousSearchItem.textContent = newShoppingListPastSearches[i];
      pastItemsForShoppingCartCn.appendChild(previousSearchItem);
      
    }
    let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
    pastItemsForShoppingCartCn.style.display = "block"
    pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
    console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
    pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
    pastItemsForShoppingCartCn.style.opacity = "100%"
    let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
    clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
    
    clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesBtn.style.opacity = "100%";
    clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
    mouseOnClearAllBtn = true
  }
  mouseInInput = true
  pastItemsForShoppingCartCn.style.display = "block"
  pastItemsForShoppingCartCn.style.opacity = "100%"
  let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
  clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
  
  clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
  clearPastSearchesBtn.style.opacity = "100%";
  clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
})
clearPastSearchesBtn.addEventListener("click",function(){
  //show a warning message
 
    let shoppingListItemInputBounds = shoppingListItemInput.getBoundingClientRect();
    clearPastSearchesWaringEl.style.marginTop = (shoppingListItemInputBounds.bottom) + "px";
    clearPastSearchesWaringEl.style.marginLeft = shoppingListItemInputBounds.left + "px";
    clearPastSearchesWaringEl.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesWaringEl.style.display = "block"
    clearPastSearchesWaringEl.style.opacity = "100%"
 
  
})
clearPastSearchesBtn.addEventListener("dblclick",function(){
  clearPastSearchesWaringEl.style.display = "none"
  while(pastItemsForShoppingCartCn.children.length > 0){
    console.log("removed" + pastItemsForShoppingCartCn.children[0].innerHTML)
    pastItemsForShoppingCartCn.children[0].remove();//previousSearchItem.parentNode.removeChild(previousSearchItem)//.classList.toggle("gettingRidOfItem")
  }
  previousItemsInShoppingList = []
  prevoiusItemsInShoppingListFilterd = []
  localStorage.setItem("previousItemsSearched",previousItemsInShoppingList)
  clearPastSearchesBtn.style.display = "none"
  clearPastSearchesWaringEl.style.display = "none"
})
clearPastSearchesBtn.addEventListener("mouseleave",function(){
  mouseOnClearAllBtn = false
    mouseInInput = false
  setTimeout(function(){
    
    if(!mouseInSearch && !mouseInInput && !inputSelected && !mouseOnClearAllBtn){
      pastItemsForShoppingCartCn.style.display = "none"
      clearPastSearchesBtn.style.display = "none"
      clearPastSearchesWaringEl.style.display = "none"
      pastItemsForShoppingCartCn.style.opacity = "0%"
    }
  },300)
  
})
shoppingListItemInput.addEventListener("mouseleave",function(){
  mouseInInput = false
  setTimeout(function(){
    
    if(!mouseInSearch && !mouseInInput && !inputSelected && !mouseOnClearAllBtn){
      pastItemsForShoppingCartCn.style.display = "none"
      clearPastSearchesBtn.style.display = "none"
      clearPastSearchesWaringEl.style.display = "none"
      pastItemsForShoppingCartCn.style.opacity = "0%"
    }
  },300)
})
pastItemsForShoppingCartCn.addEventListener("mouseleave",function(){
  mouseInSearch = false
  if(!mouseInSearch && !mouseInInput && !inputSelected && !mouseOnClearAllBtn){
    console.log(mouseOnClearAllBtn)
    pastItemsForShoppingCartCn.style.display = "none"
    clearPastSearchesBtn.style.display = "none"
    clearPastSearchesWaringEl.style.display = "none"
    pastItemsForShoppingCartCn.style.opacity = "0%"
  }
})
shoppingListItemInput.addEventListener("mouseenter",function(){
  newShoppingListPastSearches = []
  if(shoppingListItemInput.value == "" && !mouseInInput){
    while(pastItemsForShoppingCartCn.children.length > 0){
      console.log("removed" + pastItemsForShoppingCartCn.children[0].innerHTML)
      pastItemsForShoppingCartCn.children[0].remove();//previousSearchItem.parentNode.removeChild(previousSearchItem)//.classList.toggle("gettingRidOfItem")
     
    }
    console.log("herey")
    for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
      newShoppingListPastSearches.push(prevoiusItemsInShoppingListFilterd[i])
      var previousSearchItem = document.createElement("p");
      previousSearchItem.classList.add("previousSearchItemEl");
      previousSearchItem.textContent = newShoppingListPastSearches[i];
      pastItemsForShoppingCartCn.appendChild(previousSearchItem);
      
    }
    let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
    pastItemsForShoppingCartCn.style.display = "block"
    pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
    console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
    pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
    pastItemsForShoppingCartCn.style.opacity = "100%"
    let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
    clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
    
    clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesBtn.style.opacity = "100%";
    clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
    mouseInSearch = true
  }
  mouseInInput = true
  pastItemsForShoppingCartCn.style.display = "block"
  pastItemsForShoppingCartCn.style.opacity = "100%"
  let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
  clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
  
  clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
  clearPastSearchesBtn.style.opacity = "100%";
  clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
})
shoppingListItemInput.addEventListener("focus",function(){
  newShoppingListPastSearches = []
  if(shoppingListItemInput.value == "" && !inputSelected){
    while(pastItemsForShoppingCartCn.children.length > 0){
      console.log("removed" + pastItemsForShoppingCartCn.children[0].innerHTML)
      pastItemsForShoppingCartCn.children[0].remove();//previousSearchItem.parentNode.removeChild(previousSearchItem)//.classList.toggle("gettingRidOfItem")
     
    }
    console.log("herey")
    for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
      newShoppingListPastSearches.push(prevoiusItemsInShoppingListFilterd[i])
      var previousSearchItem = document.createElement("p");
      previousSearchItem.classList.add("previousSearchItemEl");
      previousSearchItem.textContent = newShoppingListPastSearches[i];
      pastItemsForShoppingCartCn.appendChild(previousSearchItem);
      
    }
    let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
    pastItemsForShoppingCartCn.style.display = "block"
    pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
    console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
    pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
    pastItemsForShoppingCartCn.style.opacity = "100%"
    let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
    clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
    
    clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesBtn.style.opacity = "100%";
    clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
    mouseInSearch = true
  }
  inputSelected = true
  pastItemsForShoppingCartCn.style.display = "block"
    pastItemsForShoppingCartCn.style.opacity = "100%"
    let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
    clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
    
    clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesBtn.style.opacity = "100%";
    clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
})
shoppingListItemInput.addEventListener("focusout",function(){
  inputSelected = false
  setTimeout(function(){
    
    if(!mouseInSearch && !mouseInInput && !inputSelected && !mouseOnClearAllBtn){
      pastItemsForShoppingCartCn.style.display = "none"
      clearPastSearchesBtn.style.display = "none"
      clearPastSearchesWaringEl.style.display = "none"
      pastItemsForShoppingCartCn.style.opacity = "0%"
    }
  },300)
})
//document.getElementById("shoppingListItemNew").style.backgroundColor = "black"
//make an array of prevously held items so they can get old items back, doesn't ahve to be held in localstroage
recoverPastItemForShoppingListBtn.addEventListener("click", function(){
    let i = redoItemsTakenOutOfShoppingList.length;
    var newListItem = document.createElement("div");
    newListItem.classList.add("shoppingListItem");
    shoppingListItemHolder.appendChild(newListItem);
    newListItem.setAttribute("id", "shoppingListItemNew")//also make this have an index like the thing below
    var newListItemName = document.createElement("p");
    newListItemName.classList.add("nameForShoppingListItem");
    newListItem.appendChild(newListItemName)
    newListItemName.textContent = redoItemsTakenOutOfShoppingList[(i-3)];
    newListItem.setAttribute("id", "shoppingListItemNameNew")
    var newListItemPrice = document.createElement("p");
    newListItemPrice.classList.add("priceForShoppingListItem");
    newListItem.appendChild(newListItemPrice)
    newListItemPrice.textContent = "$"+redoItemsTakenOutOfShoppingList[(i-2)];
    var newListItemCategories = document.createElement("p");
    newListItemCategories.classList.add("categoriesForShoppingList");
    newListItem.appendChild(newListItemCategories)
    newListItemCategories.textContent = redoItemsTakenOutOfShoppingList[(i-1)]
    totalAmountBeingSpentOnThisShoppingList += Number(redoItemsTakenOutOfShoppingList[i-2])
    if(redoItemsTakenOutOfShoppingList[(i-1)] == "Home"){
      newListItem.style.backgroundColor = "#5B3528"
    }
    else if(redoItemsTakenOutOfShoppingList[(i-1)] == "Food"){
      newListItem.style.backgroundColor = "#499EF3"
    }
    else if(redoItemsTakenOutOfShoppingList[(i-1)] == "Insurance"){
      newListItem.style.backgroundColor = "#DE29F6"
    }
    else if(redoItemsTakenOutOfShoppingList[(i-1)] == "Health"){
      newListItem.style.backgroundColor = "red"
    }
    else if(redoItemsTakenOutOfShoppingList[(i-1)] == "Savings"){
      newListItem.style.backgroundColor = "#157F19"
    }
    else if(redoItemsTakenOutOfShoppingList[(i-1)] == "Transportation"){
      newListItem.style.backgroundColor = "gray"
    }
    else if(redoItemsTakenOutOfShoppingList[(i-1)] == "Utilities"){
      newListItem.style.backgroundColor = "yellow"
    }
    else if(redoItemsTakenOutOfShoppingList[(i-1)] == "Wants"){
      newListItem.style.backgroundColor = "orange"
    }
    else{
      newListItem.style.backgroundColor = "white"
    }
    clearAllForShoppingListButton.style.display = "block"
    listOfShoppingListItems.push(redoItemsTakenOutOfShoppingList[redoItemsTakenOutOfShoppingList.length-3])
    listOfShoppingListItems.push(redoItemsTakenOutOfShoppingList[redoItemsTakenOutOfShoppingList.length-2])
    listOfShoppingListItems.push(redoItemsTakenOutOfShoppingList[redoItemsTakenOutOfShoppingList.length-1])
  localStorage.setItem("shoppingListItems", JSON.stringify(listOfShoppingListItems))
  redoItemsTakenOutOfShoppingList.splice(redoItemsTakenOutOfShoppingList.length-3,3)
  totalAmountBeingSpentOnThisShoppingList = 0
    for(let i = 0; i<listOfShoppingListItems.length; i +=3){
      totalAmountBeingSpentOnThisShoppingList += Number(listOfShoppingListItems[i+1])
    }
  totalAmountBeingSpentThisMonthEl.textContent = totalAmountBeingSpentOnThisShoppingList
  if(redoItemsTakenOutOfShoppingList.length <=0){
    recoverPastItemForShoppingListBtn.style.display = "none"
  }
})
shoppingListItemHolder.addEventListener('click', function(event) {
  console.log(shoppingListItemHolder.children)
  //event.target.classList.toggle("gettingRidOfItem")
  if (event.target.tagName.toLowerCase() === 'div') {
    //whoosh.play()
    recoverPastItemForShoppingListBtn.style.display = "inline"
    doubleItemEl.style.display = "none"
    mustInputAnItemEl.style.display = "none"
    clearListWarningEl.style.display = "none"
    console.log(event.target.children)
    console.log(event.target.children[0].innerHTML);
    redoItemsTakenOutOfShoppingList.push(listOfShoppingListItems[listOfShoppingListItems.indexOf(event.target.children[0].innerHTML)])
    redoItemsTakenOutOfShoppingList.push(listOfShoppingListItems[listOfShoppingListItems.indexOf(event.target.children[0].innerHTML)+1])
    redoItemsTakenOutOfShoppingList.push(listOfShoppingListItems[listOfShoppingListItems.indexOf(event.target.children[0].innerHTML)+2])
    //make the thing below the first value of i in a for loop htne have it iterate 3 times futher
    listOfShoppingListItems.splice(listOfShoppingListItems.indexOf(event.target.children[0].innerHTML),3)
    listOfShoppingListItems.length <= 0 ? clearAllForShoppingListButton.style.display = "none":clearAllForShoppingListButton.style.display = "inline";
    localStorage.setItem("shoppingListItems", JSON.stringify(listOfShoppingListItems))
    event.target.classList.toggle("gettingRidOfItem")
    console.log("clicked")
    console.log(listOfShoppingListItems)
    totalAmountBeingSpentOnThisShoppingList = 0
    for(let i = 0; i<listOfShoppingListItems.length; i +=3){
      totalAmountBeingSpentOnThisShoppingList += Number(listOfShoppingListItems[i+1])
    }
     totalAmountBeingSpentThisMonthEl.textContent = totalAmountBeingSpentOnThisShoppingList
  }
  else if(event.target.tagName.toLowerCase() === 'p'){
    //whoosh.play()
    recoverPastItemForShoppingListBtn.style.display = "inline"
    doubleItemEl.style.display = "none"
    mustInputAnItemEl.style.display = "none"
    clearListWarningEl.style.display = "none"
    console.log(event.target.children)
    console.log(event.target.parentNode.children[0].innerHTML);
    totalAmountBeingSpentOnThisShoppingList -= Number(event.target.parentNode.children[1].innerHTML)
     totalAmountBeingSpentThisMonthEl.textContent = totalAmountBeingSpentOnThisShoppingList
     redoItemsTakenOutOfShoppingList.push(listOfShoppingListItems[listOfShoppingListItems.indexOf(event.target.parentNode.children[0].innerHTML)])
     redoItemsTakenOutOfShoppingList.push(listOfShoppingListItems[listOfShoppingListItems.indexOf(event.target.parentNode.children[0].innerHTML)+1])
     redoItemsTakenOutOfShoppingList.push(listOfShoppingListItems[listOfShoppingListItems.indexOf(event.target.parentNode.children[0].innerHTML)+2])
    listOfShoppingListItems.splice(listOfShoppingListItems.indexOf(event.target.parentNode.children[0].innerHTML),3)
    listOfShoppingListItems.length <= 0 ? clearAllForShoppingListButton.style.display = "none":clearAllForShoppingListButton.style.display = "inline";
    localStorage.setItem("shoppingListItems", JSON.stringify(listOfShoppingListItems))
    event.target.parentNode.classList.toggle("gettingRidOfItem")
    console.log("clicked")
    console.log(listOfShoppingListItems)
    totalAmountBeingSpentOnThisShoppingList = 0
    for(let i = 0; i<listOfShoppingListItems.length; i +=3){
      totalAmountBeingSpentOnThisShoppingList += Number(listOfShoppingListItems[i+1])
    }
     totalAmountBeingSpentThisMonthEl.textContent = totalAmountBeingSpentOnThisShoppingList
  }
});
//search bar

for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
  var previousSearchItem = document.createElement("p");
    previousSearchItem.classList.add("previousSearchItemEl");
    previousSearchItem.textContent = prevoiusItemsInShoppingListFilterd[i];
    console.log(prevoiusItemsInShoppingListFilterd[i])
    pastItemsForShoppingCartCn.appendChild(previousSearchItem);
}



pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
shoppingListItemInput.addEventListener("mouseenter", function(){
  let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
  pastItemsForShoppingCartCn.style.display = "block"
  pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
  console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
  pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
  clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
  pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
  pastItemsForShoppingCartCn.style.opacity = "100%"
  let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
  clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
  
  clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
  clearPastSearchesBtn.style.opacity = "100%";
  clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
  /*if(shoppingListItemInput.value == "" && )
  for(let i = 0; i<prevoiusItemsInShoppingListFilterd.length; i++){
    var previousSearchItem = document.createElement("p");
      previousSearchItem.classList.add("previousSearchItemEl");
      previousSearchItem.textContent = prevoiusItemsInShoppingListFilterd[i];
      console.log(prevoiusItemsInShoppingListFilterd[i])
      pastItemsForShoppingCartCn.appendChild(previousSearchItem);
  }*/
  
})
function onWindowResize(){
  document.body.style.backgroundSize = "cover"
  let boundingsOfShoppingListItemInput = shoppingListItemInput.getBoundingClientRect();
  pastItemsForShoppingCartCn.style.marginTop = (boundingsOfShoppingListItemInput.top) - pastItemsForShoppingCartCn.offsetHeight + "px";
  console.log(boundingsOfShoppingListItemInput.top - pastItemsForShoppingCartCn.offsetHeight)
  pastItemsForShoppingCartCn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
  clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
  pastItemsForShoppingCartCn.style.width = shoppingListItemInput.offsetWidth + "px"
  let shoppingListItemInputBounds = shoppingListItemInput.getBoundingClientRect();
    clearPastSearchesWaringEl.style.marginTop = (shoppingListItemInputBounds.bottom) + "px";
    clearPastSearchesWaringEl.style.marginLeft = shoppingListItemInputBounds.left + "px";
    clearPastSearchesWaringEl.style.width = shoppingListItemInput.offsetWidth + "px"
    let boundingsOfPastSearchesContainer = pastItemsForShoppingCartCn.getBoundingClientRect()
    clearPastSearchesBtn.style.marginTop = (boundingsOfPastSearchesContainer.top) - clearPastSearchesBtn.offsetHeight + "px";
    clearPastSearchesBtn.style.marginLeft = boundingsOfShoppingListItemInput.left + "px";
    clearPastSearchesBtn.style.width = shoppingListItemInput.offsetWidth + "px"
    clearPastSearchesBtn.style.opacity = "100%";
    clearPastSearchesBtn.style.display = prevoiusItemsInShoppingListFilterd.length > 0 ?"block":"none";
}
window.onresize = onWindowResize;

//referece error because the element above hasn't been created yet, and reference error as the element above is local that we are calling globally
//document.getElementById("shoppingListItemNew").addEventListener("click", function(){
  //document.getElementById("shoppingListItemNew").style.display = "none"
//})
//array of items inputed, sort to the top based off price, on load, before on load show it based off rececy load items on top not bottom
