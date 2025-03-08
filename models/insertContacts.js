require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../database');
const Contact = require('./contacts');

async function insertContacts() {
  await connectDB();

  const contacts = [
    {
      firstName: "Francisco",
      lastName: "Mata",
      email: "john.doe@example.com",
      favoriteColor: "Blue",
      birthday: new Date("1990-05-15"),
    },
    {
      firstName: "Sarai",
      lastName: "Mata",
      email: "jane.smith@example.com",
      favoriteColor: "Green",
      birthday: new Date("1985-09-23"),
    },
    {
      firstName: "Isaac",
      lastName: "Mata",
      email: "alice.johnson@example.com",
      favoriteColor: "Red",
      birthday: new Date("1992-12-11"),
    },
  ];

  try {
    await Contact.insertMany(contacts);
    console.log("✅ Contacts inserted successfully!");
  } catch (error) {
    console.error("❌ Error inserting contacts:", error);
  } finally {
    mongoose.connection.close();
  }
}

insertContacts();
