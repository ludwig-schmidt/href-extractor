const showFormMessage = message => {
	document.querySelector(".form__message").innerHTML = message;
}

document.querySelector('.form__submit').addEventListener('click', e => {
	let input = document.querySelector('.form__input');

	// stop form from submitting
	e.preventDefault();

	// match regex against string in form
	let matches = input.value.match(/(?:href=")([^\'\"]+)/);

	// display error message when no link was found and stop execution
	if(!matches) {
		showFormMessage("No links found!");
		return;
	}
	
	// insert extracted link into textarea
	input.value = matches[1];

	// copy generated link to clipboard and display success message
	input.select();
	document.execCommand('copy');
	showFormMessage("Copied to clipboard");
});