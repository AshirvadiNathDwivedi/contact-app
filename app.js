import express from "express";
import routes from "./routes/contact-routes.js";
import connectDB from "./config/dbconnection.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.disable("x-powered-by");

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use("/", routes);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Handling 404
app.use((req, res) => {
	res.status(404).send("Page not found");
});

//server
app.listen(process.env.PORT, () => {
	console.log(`💕Server is running on port ❤️ ${process.env.PORT}`);
});
