class Github {
	constructor() {
		this.client_id = "5e3f396fb803c7787d7a";
		this.client_secret = "69f54d10f5ab01d3df74d52ab8e8a7c2cecadd5b";
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		return {
			profile,
		};
	}
}
