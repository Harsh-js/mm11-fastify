import modelSchema from "@models/json/modelSchema";
import Joi from "joi";

const convert = require("joi-to-json");

const authSchema = {
    test: {
        schema: {
            tags: ["auth"],

            response: {
                200: convert(Joi.object({ hi: "hello" })),
            },
        },
    }
}

export default authSchema;