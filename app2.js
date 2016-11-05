$(document).ready(function() {

//state
var state = {
	items: []
}

// manipulate
var addItem = function (state, userInput) {
	state.items.push( { title: userInput, checked: false })
}

// iterate through state.items to assign ID to shopping list objects
var assignId = function(arrayOfObjects) {
  arrayOfObjects.map(function (object, index) {
    object.itemID = (index + 1); 
  });
  var state = arrayOfObjects;
  // return state;
}

// render
var renderHtml = function (state, element) {
// iterate through state.items to get individual object attributes
	var findObjectContents = function(arrayOfObjects) {
		var checkButton = '<button class="check-button">Check</button>';
		var deleteButton = '<button class="delete-button">Delete</button>';

		arrayOfObjects.map(function (object) {
			var item = object,
			itemID = item.itemID,
			itemTitle = item.title;
			
			// HTML rendering
			var renderedListItem = ('<li id="' + itemID + '">' + itemTitle + '</li> <br> \
				' + checkButton + deleteButton );

			$(renderedListItem).prependTo('.shopping-list');

		});
	}

assignId(state.items);
findObjectContents(state.items);
element.html(findObjectContents);

}

// listen
var newItemText = $('.shopping-list-add').submit(function(event) {
	event.preventDefault();
	var userInput = $('.shopping-list-add-input').val();

	// pass out commands for next steps
	addItem(state, userInput);
	renderHtml(state, $('.shopping-list'));
});




























});