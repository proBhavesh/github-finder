//Init githib class

const github = new Github();

//init ui class

const ui = new UI();

// select input element
const userInput = document.getElementById("userInput");

// add event listener
userInput.addEventListener("keyup", (e) => {
	const value = e.target.value;
	// if statement to check value
	if (value !== "") {
		github.getUser(value).then((data) => {
			// if statement to check status
			console.log(data);
			if (data.profile.message === "Not Found") {
				console.log("Doesn't Exist");
				ui.clearProfile();
				ui.dontExist();
			}
			// else statement if passed
			else {
				ui.userProfile(data);
			}
		});
	}
	// adding else statement for clearprofile
	else {
		ui.clearProfile();
	}
});
