// routes.js
import express from "express";

const routes = express.Router();

//route
routes.get("/", (req, res) => {
	res.send("Welcome to the API");
});

export default routes;
