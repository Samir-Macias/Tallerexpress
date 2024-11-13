import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import User from "../models/User.js";

const salRounds = 10

async function hashPasswords() {
    try {
        await mongoose.connect('mongodb+srv://Sam_dev97:sam12345@basebackend.jaqjp.mongodb.net/TallerExpress');

        const users = await User.find();

        for(let user of users){
            if (!user.password.startsWith('$2b$')) {
                const hashedPasswords = await bcrypt.hash(user.password, salRounds);
                await User.updateOne({_id: user._id},{ password: hashedPasswords})
            }
        }
        console.log('Contraseñas hasheadas correctamente.');
    } catch (error) {
        console.error('Error al hashear las contraseñas:', error);
    } finally {
        mongoose.disconnect();
    }
}

hashPasswords();