import mongoose from 'mongoose';
import dbClient from '../app';

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { unique: true, required: true, type: String },
    password: { required: true, type: String }
});

export const User = dbClient.model( 'User', UserSchema );
