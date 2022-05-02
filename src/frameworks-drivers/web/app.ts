import express, { json } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./routes/user";
import fileupload from "express-fileupload";
import "dotenv/config";

const app = express();
app.use(fileupload({ useTempFiles: true }));
app.use(express.json({ limit: "0.2mb" }));
app.use(express.urlencoded({ limit: "0.2mb", extended: true }));
app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:3000", "http://locahost:5000"],
	})
);

app.get("/", (req, res) => {
	res.send("welcome to  API");
});
app.use("/users", User);
export default app;
