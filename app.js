import express from "express";
import routes from "./routes.js";
const app = express();

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
	console.log(`Server is running on port ${process.env.PORT}`);
});
