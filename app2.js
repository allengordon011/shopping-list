$(document).ready(function() {

//state
var state = {
	items: [
    { title: "peaches", checked: false },
    { title: "honey", checked: false },
	]
}

// manipulate
// state.items as argument
var assignId = function(arrayOfObjects) {
  arrayOfObjects.map(function (object, index) {
    object.itemID = (index + 1); 
  });
  var state = arrayOfObjects;
  return state;
}

// render
var renderHtml = function (state, element) {
// state.items as argument
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

}

// listen
renderHtml(state, $('.shopping-list'));

});