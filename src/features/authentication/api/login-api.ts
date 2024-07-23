import { FakeUserDb } from "../utils/fake-user-db";

export const loginApi = (email: string, password: string) => {
	const userDb = new FakeUserDb();

	const user = userDb.loginUser(email, password);

	return user;
};
