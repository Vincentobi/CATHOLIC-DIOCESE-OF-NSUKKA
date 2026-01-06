import express from 'express';
import { getEvents, addEvent, removeEvent, updateEvent } from '../controllers/eventsController.js';
import { adminAuth } from '../middleware/adminAuth.js';
const eventsRouter = express.Router();
eventsRouter.post('/add', adminAuth, addEvent);
eventsRouter.get('/get', getEvents); // Public endpoint
eventsRouter.delete('/remove/:id', adminAuth, removeEvent);
eventsRouter.put('/update/:id', adminAuth, updateEvent);
export default eventsRouter;
