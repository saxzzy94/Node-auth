import { Router } from "express";
import { registerService } from "../../factories/register-factory";
import { body } from "express-validator";
import errorCheck from "../../middlewares/errorCheck";
import { loginService } from "../../factories/login-factory";
import { loadUser } from "../../factories/load-user-factory";
import { auth } from "../../middlewares/auth";
import { uploadImg } from "../../factories/upload-image";

const router = Router();
router.post(
	"/register",
	[
		body("email").isEmail().normalizeEmail(),
		body("password")
			.not()
			.isEmpty()
			.isLength({ min: 12 })
			.withMessage("must be at least 12 characters long"),
		body("name").not().isEmpty().trim().escape(),
		body("phoneNumber").not().isEmpty(),
	],
	errorCheck,
	registerService
);

router.post(
	"/login",
	[
		body("email").isEmail().normalizeEmail(),
		body("password")
			.not()
			.isEmpty()
			.isLength({ min: 12 })
			.withMessage("must be at least 12 characters long"),
	],
	errorCheck,
	loginService
);
router.get("/load-user", auth, loadUser);
router.post("/upload", auth, uploadImg);
export default router;
