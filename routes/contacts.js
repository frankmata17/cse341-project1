const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Contact = require('../models/contacts');

router.get('/', async (req, res) => {
try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
} catch (error) {
        res.status(500).json({ message: "Error fetching contacts", error });
}
});

router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: "Error fetching contact", error });
    }
});

module.exports = router;
