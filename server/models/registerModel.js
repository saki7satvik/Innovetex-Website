import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    selectedEvent: {
        type: String,
        required: true,
    },
    teamName: {
        type: String,
        required: true,
    },
    teamLeaderName: {
        type: String,
        required: true,
    },
    teamLeaderEmail: {
        type: String,
        required: true,
    },
    teamLeaderPhone: {
        type: String,
        required: true,
    },
    teamSize: {
        type: Number,
        required: true,
    },
    teamMembers: [
        {
            memberName: { type: String, default: null },
            memberPhone: { type: String, default: null },
        },
    ],
});

export const Register = mongoose.model("Register", registerSchema);