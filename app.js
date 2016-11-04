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

$(document).ready(function()){

	//state object
	var state = {
		items: [
			{ title: "apples",
			checked: true },
			{ title: "bananas",
			checked: false }
		]
	}

	//event listeners
	$('.shopping-list-add-button').on('click', function(event){
		event.preventDefault();
		//var userInput = (this.event);
		addItem(??, ??);
		updateList(??, $('.shopping-list'));
	});

	//state modification functions
	var addItem = function (state, userInput) {
		//userInput is just text
		var newObject = {title: userInput, checked: false}
		state.items.push(newObject);
	}

	//state rendering functions
	var updateList = function (state, element) {
		$('.shopping-list').prepend('<div class="shopping-item">' + $(newObject[-1]) + '</div>');
	}

	updateList(state, 'testItem');

//nothing here