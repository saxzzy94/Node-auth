import { NextFunction, Request, Response } from "express";
import AuthMiddleware from "../../../adapters/auth-middleware.controller";
import JwtTokenManager from "../../../adapters/helper/jwt-token-manager";
import { ApplicationError } from "../../../interactors/usecases/common/errors";
import { Payload } from "../../../interactors/usecases/common/token-manager";
import { UserRepository } from "../../external/database/user-repository";
export const auth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const request = {
			accessToken: req.headers.authorization,
		};
		const tokenManager = new JwtTokenManager("secret");
		const authMiddleware = new AuthMiddleware(tokenManager);
		const userRepository = new UserRepository();
		const auth = await authMiddleware.handle(request);
		const { id } = auth as unknown as Payload;
		if (!id) {
			throw new ApplicationError(401, " you are not authorized");
		}
		const user = await userRepository.findUserById(id);
		if (!user) throw new ApplicationError(404, "User not found");

		if (auth.statusCode) {
			res.status(auth.statusCode).json(auth.message);
		} else {
			Object.assign(req, { user });
			next();
		}
	} catch (err) {
		res.status(500).json({ error: err });
	}
};
