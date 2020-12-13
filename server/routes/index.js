import express from 'express'
import { ensureAuth,ensureGuest } from "../middleware/auth.js"
import { getHome,getDashboard } from "../controllers/index.js";

const router = express.Router()

router.get('/',ensureGuest,getHome)
router.get('/dashboard',ensureAuth,getDashboard)

export default router