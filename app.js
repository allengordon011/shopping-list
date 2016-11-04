//*set up state (with links to .js and jQuery) - state object
//user wants to add an item
//user needs a text input box and a submit button
//*set up event listener for user input - event listener
//user wants to see their items in a list
//*cross reference event listener user input with state - state modification functions
//*each new item should be appended, *or pre-pended* - state modification functions
//*output 'new' state - state rendering function

//requirements: 
// -enter items they need to purchase by entering text and 
// hitting "Return" or clicking the "Add item" button
// -check and uncheck items on the list by clicking the "Check" button
// -permanently remove items from the list

$(document).ready(function()){
	//state object
	var state = {
		items: []
	}
	//event listeners
	$('.shopping-list-add-button').on('click', function(event){
		event.preventDefault();
		var userInput = (this.event);
	});
	//state modification functions
	var addItem = function (state, userInput) {
		state.items.push(userInput);
	}
	//state rendering functions
	$('.shopping-list').prepend(new_item);

	('<div class="shopping item>' + userInput + '</div>')

})

//nothing here