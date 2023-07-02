import dotenv from "dotenv";
dotenv.config();
import simplegit from "simple-git";
const git = simplegit();
import chilprocess from "child_process";

const push = async () => {
	try {
		var args = process.argv.slice(2);

		// if (!args.length) return console.warn("add a message");

		const message = args[0] || "Bug Fixes.";

		const path = args[1] || ".";

		const USER = process.env.GIT_USER;
		const PASS = process.env.GIT_TOKEN;
		const REPO = process.env.GIT_REPO;

		const remote = `https://${USER}:${PASS}@${REPO}`;

		const status = await git.status();
		console.log("🚀 ~ file: git.ts:6 ~ status", status);

		const add = await git.add(path);
		console.log("🚀 ~ file: git.ts:8 ~ add", add);

		const commit = await git.commit(message);
		console.log("🚀 ~ file: git.ts:10 ~ commit", commit);

		const push = await git.push(remote, "main");
		console.log("🚀 ~ file: git.ts:10 ~ push", push);
	} catch (e) {
		console.log("GIT ERROR: " + e);
	}
};

const pushManual = async () => {
	try {
		var args = process.argv.slice(2);

		// if (!args.length) return console.warn("add a message");

		const message = args[0] || "Bug Fixes.";

		const path = args[1] || ".";

		chilprocess.exec("git add .", (err, ...stdout) => {
			if (!err) {
				console.log("1: ", stdout);
				chilprocess.exec(`git commit -m "${message}"`, (err, ...stdout2) => {
					if (!err) {
						console.log("2: ", stdout2);

						chilprocess.exec(`git push origin main`, (err, ...stdout3) => {
							if (!err) {
								console.log("3: ", stdout3);
							}
						});
					}
				});
			}
		});
	} catch (e) {
		console.log("GIT ERROR: " + e);
	}
};
// any comment
pushManual().then();
