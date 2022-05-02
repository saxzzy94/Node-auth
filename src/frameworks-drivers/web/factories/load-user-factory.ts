import { Request, Response } from "express";
import {
	IRequest,
	Payload,
} from "../../../interactors/usecases/common/token-manager";
import { UserRepository } from "../../external/database/user-repository";
export const loadUser = async (req: Request, res: Response) => {
	try {
		const request = req as IRequest;
		const userRepository = new UserRepository();
		const { id } = request.user as unknown as Payload;

		const user = await userRepository.findUserById(id);
		const returnedUser = {
			...user,
			password: "",
		};
		res.status(200).json({
			status: "success",
			user: returnedUser,
		});
	} catch (error) {
		console.log(error);
		return res.status(400).json(error);
	}
};
