export interface UserProperties {
	id?: string;
	email: string;
	name: string;
	phoneNumber: string;
	password: string;
}
export interface Profile extends UserProperties {
	imageUrl: string;
}

export default class User implements UserProperties {
	email!: string;
	name!: string;
	phoneNumber!: string;
	password!: string;
	[x: string]: string;

	private constructor(userProperties: UserProperties) {
		this.email = userProperties.email;
		this.name = userProperties.name;
		this.phoneNumber = userProperties.phoneNumber;
		this.password = userProperties.password;
	}

	public static createUser(userProperties: UserProperties): User {
		/** some validations */

		return new User(userProperties);
	}
}
