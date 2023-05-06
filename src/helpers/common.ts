import { Request, Response } from "express";
import { R } from "./response-helpers";
import env from "@config/env";
import axios from "axios";
import {
	uniqueNamesGenerator,
	Config,
	adjectives,
	colors,
	names,
	starWars,
	animals,
} from "unique-names-generator";
import otp from "./otp";
import moment from "moment";

export const sendSms = (mobile: String) => {
	return true;
};

export function youtubeId(url: any) {
	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	const match = url.match(regExp);

	return match && match[2].length === 11 ? match[2] : null;
}

export function isNumeric(str: any) {
	// if (typeof str != "string") return false; // we only process strings!
	return (
		!isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
		!isNaN(parseFloat(str))
	); // ...and ensure strings of whitespace fail
}

export function ordinal_suffix_of(i: any) {
	var j = i % 10,
		k = i % 100;
	if (j == 1 && k != 11) {
		return i + "st";
	}
	if (j == 2 && k != 12) {
		return i + "nd";
	}
	if (j == 3 && k != 13) {
		return i + "rd";
	}
	return i + "th";
}

const scores = new Map([
	["ball", "Ball Start"],
	["four", "4"],
	["inning break", "Inning Break"],
	["six", "6"],
	["over", "Over Completed"],
	["wide", "Wide Ball"],
	["wide ball", "Wide Ball"],

	["1", "1 Run"],
	["2", "2 Runs"],
	["3", "3 Runs"],
	["4", "4 Runs"],
	["Wicket", "Wicket"],
	["Player injured", "Player injured"],
	["Drink break", "Drink break"],
	["drinks", "Drink break"],
	["3 rd umpire", "3rd umpire"],
]);

//hi

const scoresImg = new Map([
	["ball", "bowlStart.gif"],
	["four", ""],
	["inning break", "inningBreak.gif"],
	["six", "six.gif"],
	["over", "overCompleted.gif"],
	["wide", "wideBall.gif"],
	["wide ball", "wideBall.gif"],

	["1", ""],
	["2", ""],
	["3", ""],
	["4", ""],
	["wicket", "out.gif"],
	["player injured", "playerInjured.gif"],
	["drink break", "drinkBreak.gif"],
	["drinks", "drinkBreak.gif"],
	["3 rd umpire", "thirdUmpire.gif"],

	["Toss time", "tossTime.gif"],
	["Rain stop play", "rainStopPlay.gif"],
]);

export function ScoreFormater(score: any) {
	score = `${score}`.toLowerCase();
	if (!scores.has(score)) return capitalizeInitials(score);
	return capitalizeInitials(scores.get(score));
}

export function ScoreImgFormater(score: any) {
	score = `${score}`.toLowerCase();
	if (!scoresImg.has(score)) return "";
	return scoresImg.get(score);
}

export function generateRandomUserName() {
	const customConfig: Config = {
		dictionaries: [adjectives, colors, animals, names, starWars],
		separator: "",
		length: 2,
		style: "capital",
	};

	const randomName: string = uniqueNamesGenerator(customConfig);

	return randomName;
}

export const randomInRange = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min)) + min;

export function formatTime(seconds: number) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;
	const timeString = `${hours}:${minutes
		.toString()
		.padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
	return timeString;
}

export interface AppRequest extends Request {
	userId: string;
}

export function getMatchStatus(status: string) {
	const map: any = {
		Live: "LIVE",
		Finished: "COMPLETED",
		Upcoming: "UPCOMING",
	};
	return map[status] ?? "";
}

export function isTest(match_type: any) {
	return `${match_type}`.toLocaleLowerCase() == "test";
}

export function shortNameConverter(fullName: string) {
	if (!fullName?.length) {
		return "";
	}
	if (fullName.length == 1) {
		return fullName;
	}

	let splitedName = fullName.split(" ");

	if (splitedName?.length == 1) return fullName;

	let initials = splitedName[0][0] + ".";
	let abbreviatedName = initials + fullName.substring(fullName.indexOf(" "));
	return abbreviatedName;
}

export function getRemainingTime(dateTime: any) {
	// Set the target date
	const targetDate = moment(dateTime);

	// Get the current date
	const currentDate = moment();

	// Calculate the duration between the current date and the target date
	const remainingTime = moment.duration(targetDate.diff(currentDate));

	// Print the remaining time in days, hours, minutes, and seconds
	return `${remainingTime.hours()} hours, ${remainingTime.minutes()} minutes ${remainingTime.seconds()} seconds`;
}

function capitalizeInitials(str: any) {
	let words = str.split(" ");
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	return words.join(" ");
}
