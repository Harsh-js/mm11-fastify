import { Request } from "express";

export default interface TEst extends Request {
	userId?: string;
}
