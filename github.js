class Github {
	constructor() {
		this.client_id = "5e3f396fb803c7787d7a";
		this.client_secret = "5e9ad401ec7c46a6e93231340ded1ede9d0c2e21";
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		return {
			profile,
		};
	}
}
