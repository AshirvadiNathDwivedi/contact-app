// contact-routes.js
import express from "express";
import {
	getAllContacts,
	getContactById,
	createContact,
	updateContact,
	deleteContact,
} from "../controller/contact-controller.js";
const routes = express.Router();

//route
routes.get("/", getAllContacts);
routes.get("/:id", getContactById);
routes.post("/", createContact);
routes.put("/:id", updateContact);
routes.delete("/:id", deleteContact);

export default routes;
