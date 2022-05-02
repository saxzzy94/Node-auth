import connection from "./db";
import User, { Profile, UserProperties } from "../../../entities/user/User";
import { UserGateway } from "../../../interactors/gateway/users-gateway";
import RegisterUserDto from "../../../interactors/usecases/user/register-user/register-user.dto";
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";

export class UserRepository implements UserGateway {
	async findUserByEmail(email: string): Promise<UserProperties> {
		const result = await connection
			.select()
			.from("users")
			.where("email", email);
			console.log(result);
		return result[0] as any as UserProperties;
	}

	async save(userData: RegisterUserDto): Promise<UserProperties> {
		try {
			const result = await connection("users").insert({
				id: uuidv4(),
				full_name: userData.name,
				email: userData.email,
				phone_number: userData.phoneNumber,
				password: userData.password,
			});
			console.log("save", result[0]);
			return result as any as UserProperties;
		} catch (error) {
			console.log("save", error);
			throw error;
		}
	}
	async findUserById(id: string): Promise<Profile> {
		try {
			const result = await connection.select().from("users").where("id", id);

			return result[0] as any as Profile;
		} catch (error) {
			console.log(error);

			throw error;
		}
	}

	async updateUserImage(id: string, url: string): Promise<void> {
		try {
			const result = await connection("users")
				.where("id", id)
				.update({ profile_image: url });
		} catch (error) {
			throw error;
		}
	}
}
