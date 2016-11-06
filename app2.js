$(document).ready(function() {

/*
To do:
- Add styling to all .shopping-items
- Add click events for buttons
- Add rendering for click events
*/

//state
var state = {
	items: []
}

// manipulate
function addItem(state, userInput) {
	state.items.push( { title: userInput, checked: false })
}
// iterate through state.items to assign ID to shopping list objects
function assignId(arrayOfObjects) {
  arrayOfObjects.map(function (object, index) {
    object.itemID = (index + 1); 
  });
}

// render
function updateDOM(state, element) {
	$('.shopping-list').children().remove();	
// iterate through state.items to get individual object attributes
	function findObjectContents(arrayOfObjects) {
		var checkButton = '<button class="check-button">Check</button>';
		var deleteButton = '<button class="delete-button">Delete</button>';

		arrayOfObjects.forEach(function (object) {
			var item = object,
			itemID = item.itemID,
			itemTitle = item.title,
			listItem = '<span id="' + itemID + '">' + itemTitle + '</span>';
			itemContent = listItem + checkButton + deleteButton
			
			// HTML rendering
			var renderedListItem =
				('<li class="shopping-item" id="shopping-list-item"><div class="container">' + itemContent + '</div></li>');
			$(renderedListItem).prependTo('.shopping-list');
		});
	}



assignId(state.items);
findObjectContents(state.items);
}



// listen
var newItemText = $('.shopping-list-add').submit(function(event) {
	event.preventDefault();
	var userInput = $('.shopping-list-add-input').val();

	// pass out commands for next steps
	addItem(state, userInput);
	updateDOM(state, $('.shopping-list'));
});




























});