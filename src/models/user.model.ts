import * as Mongoose from 'mongoose';

interface userDoc extends Mongoose.Document {
    banned: boolean,
    creationDate: Date,
    accountName: string,
    discordID: string
}

const userSchema = new Mongoose.Schema({
    banned: {
        type: Boolean,
        required: false,
        default: false
    },
    creationDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    accountName: {
        type: String,
        required: true,
        unique: true
    },
    discordID: {
        type: String,
        required: true,
        unique: true
    }
});

const User = Mongoose.model<userDoc>(`User`, userSchema);

export default User;
