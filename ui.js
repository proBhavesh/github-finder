class UI {
	constructor() {
		this.profile = document.querySelector(".data");
	}

	//user profile HTML
	showProfile(user) {
		this.profile.innerHTML = `
		<div class="user-profile">
  		<img src="${user.avatar_url}" />	

  		<a href="${user.html_url}" target="_blank">View Profile</a>

  		<div class="followers">Nummber of Followers ${user.followers}</div>
  		<div class="repos">Repos ${user.public_repos}</div>
   		<a href="${user.blog}" target="_blank">View Blog</a>
		</div>`;
	}
}
