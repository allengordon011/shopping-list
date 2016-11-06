$(document).ready(function() {

/*
to-do:
- styling
- fix delete/re-add bug 
- if ID property is not used to fix bug, remove
*/

// STATE //
var state = { items: [] }

// MANIPULATE //
function addItem(state, userInput) {
	state.items.push( { title: userInput })
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
			var listItem = '<p id="' + object.itemID + '">' + object.title + '</p>',
				checkButton = '<button class="check-button">Check</button>',
				deleteButton = '<button class="delete-button">Delete</button>',
				fullContent = ('<li>' + listItem + checkButton + deleteButton + '</li>');

			$(fullContent).prependTo('.shopping-list');
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
	$('.shopping-list-add-input').val('');
});

function handleClick() {
	var findListItem = $(event.currentTarget).prev();
	checkItem(findListItem);
}

function handleDelete() {
	var findListItem = $(event.currentTarget).prev();
	deleteItem(findListItem);
}

});