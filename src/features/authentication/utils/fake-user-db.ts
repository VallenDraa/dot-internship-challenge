import { type User, type UserCreate } from "../types/user";

export class FakeUserDb {
	static getInstance() {
		FakeUserDb.instance ||= new FakeUserDb();

		return FakeUserDb.instance;
	}

	private static instance: FakeUserDb | undefined;

	private readonly users = JSON.parse(
		localStorage.getItem("users") ?? "[]",
	) as User[];

	constructor() {
		if (this.users.length === 0) {
			localStorage.setItem("users", JSON.stringify([]));
		}
	}

	registerUser(newUser: UserCreate) {
		const isUserExists = this.users.some(
			user => user.email.toLowerCase() === newUser.email.toLowerCase(),
		);

		if (isUserExists) {
			throw new Error("User already exists");
		}

		this.users.push({ id: crypto.randomUUID(), ...newUser });
		localStorage.setItem("users", JSON.stringify(this.users));

		return "User registered successfully";
	}

	loginUser(email: string, password: string) {
		const user = this.users.find(user => user.email === email);
		if (!user) {
			throw new Error("User not found");
		}

		const isPasswordSame = user.password === password;
		if (!isPasswordSame) {
			throw new Error("Invalid password");
		}

		return user;
	}
}
