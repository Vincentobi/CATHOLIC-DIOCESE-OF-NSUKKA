import mongoose, { Schema, Document } from 'mongoose';

export interface IUpcomingEvent extends Document {
    date: any; // Using any as it was Mixed in JS
    title: string;
    description: string;
}

const upcomingEventsSchema: Schema = new mongoose.Schema({
    date: { type: mongoose.Schema.Types.Mixed, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const UpcomingEvents = mongoose.model<IUpcomingEvent>('UpcomingEvents', upcomingEventsSchema);

export default UpcomingEvents;
