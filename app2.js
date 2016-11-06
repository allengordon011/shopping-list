$(document).ready(function() {

/*
To do:
- Add styling to all .shopping-items
- Add click events for buttons
- Add rendering for click events
*/

// STATE //
var state = { items: [] }

// MANIPULATE //
function addItem(state, userInput) {
	state.items.push( { title: userInput, checked: false })
}

function assignId(arrayOfObjects) {
  arrayOfObjects.map(function (object, index) {
    object.itemID = (index + 1); 
  });
}

// RENDER //
function updateDOM(state, element) {
	$('.shopping-list').children().remove();	

	function findObjectContents(arrayOfObjects) {
		arrayOfObjects.forEach(function (object) {
			var item = object,
				itemID = item.itemID,
				itemTitle = item.title,
				listItem = '<p id="' + itemID + '">' + itemTitle + '</p>',
				checkButton = '<button class="check-button">Check</button>',
				deleteButton = '<button class="delete-button">Delete</button>',
				itemContent = listItem + checkButton + deleteButton;
			
			var renderedListItem =
				('<li>' + itemContent + '</li>');
			$(renderedListItem).prependTo('.shopping-list');
		});
	}
assignId(state.items);
findObjectContents(state.items);
}

function checkItem(findListItem) {
	$(findListItem).toggleClass('shopping-item__checked');
}

function deleteItem(findListItem) {
	$(findListItem).parent('li').remove();
}

// LISTEN //
$('.shopping-list-add').submit(function(event) {
	event.preventDefault();
	var userInput = $('.shopping-list-add-input').val();
	// pass out commands for next steps
	addItem(state, userInput);
	updateDOM(state, $('.shopping-list'));
	$('.check-button').on('click', handleClick);
	$('.delete-button').on('click', handleDelete);
});

function handleClick() {
	var findListItem = $(event.currentTarget).prev();
	// pass out commands for next steps
	// if statement for check-button / delete-button?
	checkItem(findListItem);
}

function handleDelete() {
	var findListItem = $(event.currentTarget).prev();
	// pass out commands for next steps
	// if statement for check-button / delete-button?
	deleteItem(findListItem);
}

























});