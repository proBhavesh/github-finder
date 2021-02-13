class UI {
	constructor() {
		this.profile = document.getElementById("profile");
	}

	userProfile(user) {
		this.profile.innerHTML = `
		<div class="img-bt">
			<img src="${user.profile.avatar_url}"/>
			<a href="${user.profile.html_url}" target="_blank">View Profile</a>
		</div>
		<div class="p-info">
			<span class="btns btn1">Followers: ${user.profile.followers}</span>
			<span class="btns btn2">Following: ${user.profile.following}</span>
			<span class="btns btn3">Public Repos: ${user.profile.public_repos}</span>
			<span class="btns btn4">Public Gists: ${user.profile.public_gists}</span>
		</div>

		<ul class="g-info">
			<li class="list-items">Company ${user.profile.company}</li>
			<li class="list-items">Blog/Website ${user.profile.blog}</li>
			<li class="list-items">Location ${user.profile.location}</li>
			<li class="list-items">Joined On ${user.profile.created_at}</li>
		</ul>
		`;
	}
}
