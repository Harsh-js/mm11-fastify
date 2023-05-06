import SequelizeAuto, { AutoOptions } from "sequelize-auto";
import config from "@config/mysql";

const options: AutoOptions = {
	host: config.host,
	dialect: config.dialect,
	directory: "./src/models",
	lang: "ts",
	singularize: false,
	useDefine: true,
	views: true,
};
const auto = new SequelizeAuto(
	config.db,
	config.user,
	config.password,
	options,
);

auto.run().then();
