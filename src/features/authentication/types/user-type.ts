export type User = {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
};

export type UserCreate = {
	username: string;
	email: string;
	password: string;
};
