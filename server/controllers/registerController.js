import { Register } from '../models/registerModel.js';

export const register = async (req, res) => {
    const { selectedEvent, teamName, teamLeaderName, teamLeaderEmail, teamLeaderPhone, teamSize, teamMembers } = req.body;

    try {
        const newRegister = new Register({
            selectedEvent,
            teamName,
            teamLeaderName,
            teamLeaderEmail,
            teamLeaderPhone,
            teamSize,
            teamMembers,
        });

        await newRegister.save();

        res.status(201).json(newRegister);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};