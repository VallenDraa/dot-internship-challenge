export const REFRESH_TOKEN = "refreshToken";

let accessToken: string | undefined;

export const getAccessToken = () => accessToken;
export const setAccessToken = (token: string) => {
	accessToken = token;
};

export const getBearerToken = () => {
	const accessToken = getAccessToken();

	if (!accessToken) {
		return null;
	}

	return `Bearer ${getAccessToken()}`;
};

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
export const setRefreshToken = (token: string) => {
	localStorage.setItem(REFRESH_TOKEN, token);
};
