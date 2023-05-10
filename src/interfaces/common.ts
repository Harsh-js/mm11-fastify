import { Request } from "express";

export default interface TEst extends Request {
	userId?: string;
}

export interface ITokenDecoded {
	aud: string;
	exp: number;
	iat: number;
}
