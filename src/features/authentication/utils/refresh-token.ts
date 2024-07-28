export const REFRESH_TOKEN = "refreshToken";

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
export const setRefreshToken = (token: string) => {
	localStorage.setItem(REFRESH_TOKEN, token);
};
