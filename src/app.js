const formInput = document.querySelector('.form__input'),
	  formMessage = document.querySelector(".form__message");


const handleCopy = input => {
	let matches = input.value.match(/(?:href=")([^\'\"]+)/);
	console.log(matches);
	
	if(!matches) {
		formMessage.innerHTML = "No links found";
		return;
	}
	input.value = matches[1];

	input.select();
	document.execCommand('copy');
	formMessage.innerHTML = "Copied to clipboard";
}


document.querySelector('.form__submit').addEventListener('click', e => {
	e.preventDefault();

	handleCopy(formInput);
});

