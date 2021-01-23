import express from 'express'


import { createEvent, deleteEvent, getEvent, likeEvent, updateEvent } from '../controllers/events.js'
import auth from '../middleware/auth.js'


const router = express.Router()

router.get('/',getEvent)
router.post('/',auth,createEvent)
router.patch('/:id',auth,updateEvent)
router.delete('/:id',auth,deleteEvent)
router.patch('/:id/likeEvent',auth,likeEvent)


export default router