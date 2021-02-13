class Github {
	constructor() {
		this.client_id = "5e3f396fb803c7787d7a";
		this.client_secret = "15e6c7d36a3226455d8903f5c070b0d9a0983363";
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
