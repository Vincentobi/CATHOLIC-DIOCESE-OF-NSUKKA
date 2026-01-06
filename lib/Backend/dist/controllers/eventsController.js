import UpcomingEvents from '../models/upcomingEvents.js';
// Function for adding an Event
export const addEvent = async (req, res) => {
    try {
        const { date, title, description } = req.body;
        const eventData = {
            date,
            title,
            description
        };
        console.log("Received event data:", eventData);
        const event = new UpcomingEvents(eventData);
        await event.save();
        res.status(201).json({ message: 'Event added successfully', data: eventData });
    }
    catch (error) {
        console.log("Error adding event:", error);
        res.status(500).json({ message: 'Failed to add event', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
// Function for removing an Event
export const removeEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await UpcomingEvents.findByIdAndDelete(id);
        if (!event) {
            res.status(404).json({ message: 'Event not found' });
            return;
        }
        res.status(200).json({ message: 'Event removed successfully', data: event });
    }
    catch (error) {
        console.log("Error removing event:", error);
        res.status(500).json({ message: 'Failed to remove event', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
// Function for getting all Events
export const getEvents = async (req, res) => {
    try {
        const events = await UpcomingEvents.find().sort({ date: 1 }); // Sort by date ascending
        res.status(200).json({ message: 'Events fetched successfully', data: events });
    }
    catch (error) {
        console.log("Error fetching events:", error);
        res.status(500).json({ message: 'Failed to fetch events', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
// Function for updating an Event
export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, title, description } = req.body;
        const event = await UpcomingEvents.findByIdAndUpdate(id, { date, title, description }, { new: true, runValidators: true });
        if (!event) {
            res.status(404).json({ message: 'Event not found' });
            return;
        }
        res.status(200).json({ message: 'Event updated successfully', data: event });
    }
    catch (error) {
        console.log("Error updating event:", error);
        res.status(500).json({ message: 'Failed to update event', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
