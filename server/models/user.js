import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = Schema({
    
    name:{
        type: String,
        required: true,
    },

    surname:{
        type: String,
        required: true,
    },

    age:{
        type: Number,
        required: true,
    }
});

export const User = mongoose.model("User", userSchema);