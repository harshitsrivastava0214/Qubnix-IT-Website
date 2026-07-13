const { Contact } = require("../models");
const {sendInquiryEmails} = require("../services/contactService")

const sendContact = async (req, res) => {
    try {

        const {
            name,
            email,
            phone,
            company,
            service,
            message,
            budget,
            timeline
        } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                error: "Please fill all required fields"
            });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            company,
            service,
            message,
            budget,
            timeline
        });

        await sendInquiryEmails(contact)

        return res.status(201).json({
            success: true, 
            message: "Inquiry sent successfully",
            data: contact
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            error: "Internal Server Error"
        });

    }
}

module.exports = {
    sendContact
}