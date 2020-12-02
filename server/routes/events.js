import express from 'express'
import { createEvent, getEvent } from '../controllers/events.js'


const router = express.Router()

router.get('/',getEvent)
router.post('/',createEvent)


export default router