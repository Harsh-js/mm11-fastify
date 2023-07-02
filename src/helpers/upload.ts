import { AppRequest } from "@helpers/common";
import { FastifyReply as Response, FastifyRequest as Request } from "fastify";
import env from "@config/aws";
import { CustomRequest, R } from "./response-helpers";
import path from "path";
import { UploadedFile } from "express-fileupload";
import aws from "aws-sdk";
import AppErr from "./AppErr";
import pump from "pump";
import fs from "fs";

aws.config.update({
	accessKeyId: env.accessKeyId,
	secretAccessKey: env.secretAccessKey,
	region: env.region,
});

const s3 = new aws.S3({});

export const uploadMultiFile = async (
	req: CustomRequest,
	res: Response,
	_path: string,
	ignore?: Boolean,
) => {
	try {
		const files = await req.files();
		console.log("files: ", files);

		const data = [] as {
			fileName: string;
		}[];

		for await (const part of files) {
			// iterate the async generator
			req.log.info("storing %s", part.filename);

			let filename = part?.filename;

			const extensionName = path?.extname(filename ?? "");

			const allowedExtension = [".png", ".jpg", ".jpeg", ".gif"];

			if (!allowedExtension.includes(extensionName)) {
				return res.send({
					message: "Invalid Image",
					status: false,
					data: null,
				});
			}

			filename =
				part?.filename.substring(0, 3).trim() + Date.now() + extensionName;

			const storedFile = fs.createWriteStream(
				`${process.cwd()}/public/${filename}`,
			);
			console.log("storedFile: ", storedFile);
			await pump(part.file, storedFile);
			data.push({
				fileName: filename,
			});
		}

		return R(true, "File uploaded", data);
	} catch (e) {
		return R(false, "File upload failed", {}, {}, res);
	}
};

export const uploadOneFile = async (
	req: AppRequest,
	res: Response,
	_path: string,
	ignore?: Boolean,
	fileKey?: string,
) => {
	try {
		let publicPath = _path;

		if (!req.files) {
			if (ignore) {
				return false;
			}
			throw new AppErr("No file uploaded!");
		}

		const file = req.files[fileKey || "file"] as UploadedFile;

		let filename = file?.name;

		const extensionName = path?.extname(filename ?? "");

		const allowedExtension = [".png", ".jpg", ".jpeg", ".gif"];

		if (!allowedExtension.includes(extensionName)) {
			return res.send({ message: "Invalid Image", status: false });
		}

		filename = "" + Date.now() + extensionName;

		const params = {
			Bucket: env.bucketName,
			Key: filename,
			Body: file?.data,
		};

		let s3File = await s3.upload(params).promise();

		// file.mv(`${publicPath}${filename}`);

		return s3File?.Location;
	} catch (e) {
		return R(false, "File upload failed", {}, {}, res);
	}
};
