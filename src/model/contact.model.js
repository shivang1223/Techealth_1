import mongoose from "mongoose";

const ConatctSchema = new mongoose.Schema({
    email: {
        type: String,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        ref: "Replies"
    },
}, { timestamps: true })

const Contact = mongoose.models.Contact || mongoose.model("Contact", ConatctSchema);
export default Contact;