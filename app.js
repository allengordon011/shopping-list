//*set up state (with links to .js and jQuery) - state object
//user wants to add an item
//user needs a text input box and a submit button
//*set up event listener for user input - event listener
//user wants to see their items in a list
//*push event listener user input into state - state modification functions
//*each new item should be appended, *or prepended* - state modification functions
//*output 'new' state - state rendering function

//requirements: 
// -enter items they need to purchase by entering text and 
// hitting "Return" or clicking the "Add item" button
// -check and uncheck items on the list by clicking the "Check" button
// -permanently remove items from the list

/*
1. user clicks check button - event listener
2. event listener sends click data to state modifier
3. state modifier changes value of property "items"
4. state render function applies or removes strikethru
*/

$(document).ready(function(){

	//state object
	//an array of "item: userInput" objects with property "checked: true/false"
	var state = {
		items: []
		// console.log("state object " + state.items)

		//
		// items: [
		//   { title: 'Apples', checked: false, id: '1' }
		//   { title: 'Pears', checked: true, id: '2' }
		//]
	}

	//event listeners
	/*
	- needs: user input
	- grabs text from input field when "submit" button is clicked
	- passes info to addItem
	- passes info to updateList
	- >> form resets
	*/

	$('.shopping-list-add').submit(function(event){
		event.preventDefault();
		var userInput = $('.shopping-list-add-input').val();

		addItem(state, userInput);
		updateHtml(state, $('.shopping-list'));

		// console.log("event listeners " + userInput);

	});

	// State -> DOM -> User Action -> State -> DOM ...

	$('.check-button').on('click', function() {

		toggleStatus(state, itemId);
		// $(event.target).closest('li').toggleclass($('.shopping-item__checked'), addOrRemove);
	});

	//state modification functions
	/*
	- needs: state, userInput
	- creates new object using user input
	- pushes object to state object array
	*/
	var addItem = function (state, userInput) {
		var newObject = {
			title: userInput,
			checked: false 
			// add item id
		}
		state.items.push(newObject);

		console.log("state modification " + newObject);
	}

	/**************/
	var toggleStatus = function (state, itemId) {
		var item = state.items.findById(itemId)
		item.checked = !item.checked
	}

	//state rendering functions
	/*
	- needs: state, element to update
	- uses jQuery to add html/css to element (iterates over all items)
	- replaces old HTML element with updated HTML element
	*/
	//first parameter is the state, element to render into is the second
	var updateHtml = function (state, element) {
		// element = $('.shopping-list')
		// 'checkButton' value= value of property

		var checkButton = '<button class="check-button">Check</button>';
		var deleteButton = '<button class="delete-button">Delete</button>';

		var itemsHtml = state.items.map(function(item) {
			var liId = item.id;
			var itemTitle = '<li id=">' + liID + '" ' + item.title + '</li>';
			var itemTitleChecked = '<li id=item.id class="shopping-item__checked" id">' + liID + '" ' + item.title + '</li>';
			return (itemTitle + checkButton + deleteButton); 
		});
		
		element.html(itemsHtml);

	};

});

//nothing here















