import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export default (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		let errorMessage = errors
			.array()
			.map((error) => `${error.param}: ${error.msg}`);
		return res.status(400).json({ msg: errorMessage });
	}
	next();
};
