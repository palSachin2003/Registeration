import Registration from '../Model/Reg.model'
import mongoose from 'mongoose';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



export const getData = async (req, res) => {
    try {
        const regData = await Registration.find();
        res.status(200).json({
            data: regData,
            message: "Find Data "
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};






export const adddata = async (req, res) => {
    try {
        const uploadFile = upload.single("resume");

        uploadFile(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    message: err.message,
                });
            }

            const {
                name,
                dob,
                gender,
                hobbies,
                state,
                address,
            } = req.body;

            const resumeFile = req.file;

            const resumeBuffer = Buffer.from(resumeFile.buffer);

            const registrationData = new Registration({
                name: name,
                dob: dob,
                gender: gender,
                hobbies: hobbies.split(','),
                state: state,
                address: address,
                resume: {
                    data: resumeBuffer,
                    contentType: resumeFile.mimetype,
                },
            });

            await registrationData.save();

            if (registrationData) {
                res.status(201).json({
                    data: registrationData,
                    message: "Add successfully",
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
