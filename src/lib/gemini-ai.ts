// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// Usar la variable de entorno para obtener la API key
const apikey = process.env.GEMINI_API_KEY;
if (!apikey) {
	throw new Error(
		"API key not found. Make sure you have set GEMINI_API_KEY in your .env file."
	);
}

// const apikey = `${process.env.GEMINI_API_KEY}`;
//const apikey = "AIzaSyCYVDVDaLJSL7m5ZjkBX-1ba0pui9qxp-A";
const genAI = new GoogleGenerativeAI(apikey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const generationConfig = {
	temperature: 1.0,
	responseMimeType: "text/plain",
	maxOutputTokens: 8192,
	topP: 0.95,
	topK: 64,
};

export const chatSession = model.startChat({
	generationConfig: generationConfig,
	history: [],
});
