import HttpRequest from "../../helper/httpRequest";
import RegisterUserInteractor from "../../../interactors/usecases/user/register-user/register-user.interactor";
import { UserProperties } from "../../../entities/user/User";

interface HTTPRegisterRequestBody {
	email: string;
	name: string;
	phoneNumber: string;
	password: string;
	gender: string;
}

export default class RegisterUserController {
	constructor(private interactor: RegisterUserInteractor) {}

	async run(input: HttpRequest<any, any, HTTPRegisterRequestBody, any>) {
		if (input.body) {
			const request: UserProperties = {
				email: input.body.email,
				name: input.body.name,
				phoneNumber: input.body.phoneNumber,
				password: input.body.password,
			};
			const result = await this.interactor.run(request);
			return result;
		}
	}
}
