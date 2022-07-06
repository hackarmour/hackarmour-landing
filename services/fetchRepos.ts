import axios from "axios";

export async function fetchRepos() {
	const repos = await axios
		.get(`https://api.github.com/users/hackarmour/repos`)
		.catch((err) => {
			console.log(err.response);
			return null;
		});
	if (repos === null) return [];
	return repos.data;
}
