export type User = {
	id: string;
	username: string;
	email: string;
	password: string;
};

export type UserCreate = {
	username: string;
	email: string;
	password: string;
};
