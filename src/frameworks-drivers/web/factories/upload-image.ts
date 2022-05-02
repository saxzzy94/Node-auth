import { Request, Response } from "express";
import cloudinary from "cloudinary";
import { IRequest, Payload } from "../../../interactors/usecases/common/token-manager";
import { UserRepository } from "../../external/database/user-repository";
const cld = cloudinary.v2;

cld.config({
	cloud_name: "dhuongzsk",
	api_key: "259949397767122",
	api_secret: "l3leGEoDVs4FszcDuMr_0LW8zqI",
});
export const uploadImg = async (req: Request, res: Response) => {
	console.log("upload");
	try {
        const request = req as IRequest;
		const userRepository = new UserRepository();
		const { id } = request.user as unknown as Payload;
		const fileStr = req.body.data;
		const uploadResponse = await cld.uploader.upload(fileStr, {
			upload_preset: "test",
		});
    await userRepository.updateUserImage(id, uploadResponse.url)
		
        
		res.json({ msg: "yaya" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ err: "Something went wrong" });
	}
};

// export const getImg = async (req: Request, res: Response) => {
// 	const { resources } = await cld.search
// 		.expression("folder:dev_setups")
// 		.sort_by("public_id", "desc")
// 		.max_results(30)
// 		.execute();

// 	const publicIds = resources.map((file: any) => file.public_id);
// 	res.send(publicIds);
// };
