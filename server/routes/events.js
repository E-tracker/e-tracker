import express from 'express'
import { createEvent, deleteEvent, getEvent, likeEvent, updateEvent } from '../controllers/events.js'


const router = express.Router()

router.get('/',getEvent)
router.post('/',createEvent)
router.patch('/:id',updateEvent)
router.delete('/:id',deleteEvent)
router.patch('/:id/likeEvent',likeEvent)


export default router