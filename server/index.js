const path = require('path');
const express = require("express");
const cors = require('cors');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  console.log("Received GET request at /api");
  res.json({ message: "Hello from server!" });
});


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Nodemailer error:", error);
  } else {
    console.log("Nodemailer is ready to send emails");
  }
});

app.post("/api/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
  console.log("Received POST request at /api/contact with data:", req.body);

  const name = req.body.firstName + " " + req.body.lastName; // Added a space between first name and last name
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  console.log(`Processed form data - Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);

  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.json(error);
    } else {
      console.log("Email sent successfully");
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.get('*', (req, res) => {
  console.log("Received request at wildcard route");
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

// Showing that the server is up and running
app.listen(PORT, () => {
  console.log(`Server is online on port: ${PORT}`);
});
