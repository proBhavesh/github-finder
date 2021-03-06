class UI {
	constructor() {
		this.profile = document.getElementById("profile");
		this.notFound = document.getElementById("not-found");
	}

	userProfile(user) {
		this.profile.innerHTML = `
		<div class="img-bt">
			<img src="${user.profile.avatar_url}"/>
			<a href="${user.profile.html_url}" target="_blank">View Profile</a>
		</div>
		<div class="p-info">
			<button><div class="btns btn1">Followers: ${user.profile.followers}</div></button>
			<button><div class="btns btn2">Following: ${user.profile.following}</div></button>
			<button><div class="btns btn3">Public Repos: ${user.profile.public_repos}</div></button>
			<button><div class="btns btn4">Public Gists: ${user.profile.public_gists}</div></button>
		</div>

		<div class="g-info">
			<div class="list-items">Company : ${user.profile.company}</div>
			<div class="list-items">Blog/Website : ${user.profile.blog}</div>
			<div class="list-items">Location : ${user.profile.location}</div>
			<div class="list-items">Joined On : ${user.profile.created_at}</div>
		</div>
		`;
	}

	dontExist() {
		this.clearAlert();
		this.notFound.innerHTML = `
		<div class="nf">
			<p class="nfp alert">User doesn't exist...</p>
		</div>
		`;
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}

	clearProfile() {
		this.profile.innerHTML = "";
	}

	clearAlert() {
		const currentAlert = document.querySelector(".alert");

		if (currentAlert) {
			currentAlert.remove();
		}
	}
}
