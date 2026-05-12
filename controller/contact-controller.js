export const getAllContacts = (req, res) => {
	res.send("Fetching all contacts");
};

export const getContactById = (req, res) => {
	const { id } = req.params;
	res.send(`Fetching contact with ID: ${id}`);
};

export const createContact = async (req, res) => {
	try {
		const { firstName, lastName, email, phone, adrress } = req.body;

		const newContact = new Contact({
			firstName,
			lastName,
			email,
			phone,
			adrress,
		});

		const savedContact = await newContact.save();
		res.status(201).json(savedContact);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const updateContact = async (req, res) => {
	try {
		const { id } = req.params;
		const { firstName, lastName, email, phone, address } = req.body;

		const updatedContact = await Contact.findByIdAndUpdate(
			id,
			{ firstName, lastName, email, phone, address },
			{ new: true },
		);

		if (!updatedContact) {
			return res.status(404).json({ message: "Contact not found" });
		}

		res.json(updatedContact);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
export const deleteContact = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedContact = await Contact.findByIdAndDelete(id);

		if (!deletedContact) {
			return res.status(404).json({ message: "Contact not found" });
		}

		res.json({ message: "Contact deleted successfully" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
