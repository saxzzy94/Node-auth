import { UserProperties } from "../../../entities/user/User";
import { ApplicationError } from "./errors";
import { Request } from "express";

export type Payload = {
	id: string;
};
export interface ITokenManager {
	sign(info: Payload, expiresIn: string): Promise<string>;
	verify(token: string): Promise<Payload | ApplicationError>;
}
export interface IRequest extends Request {
	user: UserProperties;
}
