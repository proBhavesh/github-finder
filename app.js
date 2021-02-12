//Init githib class

const github = new Github();

//init ui class

const ui = new UI();

const userInput = document.getElementById("userInput");

userInput.addEventListener("keyup", (e) => {
	const value = e.target.value;
	// console.log(value);

	if (value !== "") {
		github.getUser(value).then((data) => {
			console.log(data);
			ui.userProfile(data);
		});
	}
});
