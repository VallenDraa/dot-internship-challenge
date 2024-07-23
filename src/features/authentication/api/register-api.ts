import { FakeUserDb } from "../utils/fake-user-db";

export const registerApi = (
	username: string,
	email: string,
	password: string,
) => {
	const userDb = new FakeUserDb();

	const message = userDb.registerUser({
		username,
		email,
		password,
	});

	return message;
};
