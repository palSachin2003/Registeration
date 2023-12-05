import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    hobbies: {
        type: [String],
        default: [],
    },
    state: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    resume: {
        data: {
            type: Buffer,
            // default:null,
        },
        contentType: {
            type: String,
            // default:null,

        },
    },
});


const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;