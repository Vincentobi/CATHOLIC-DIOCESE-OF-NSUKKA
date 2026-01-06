import mongoose from 'mongoose';
const upcomingEventsSchema = new mongoose.Schema({
    date: { type: mongoose.Schema.Types.Mixed, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});
const UpcomingEvents = mongoose.model('UpcomingEvents', upcomingEventsSchema);
export default UpcomingEvents;
