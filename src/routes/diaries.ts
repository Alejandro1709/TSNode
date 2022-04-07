import { Router, Request, Response } from 'express'
import { getEntries } from '../services/diaryServices'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
  res.send(getEntries())
})

// router.post('/', (req: Request, res: Response) => {
// })

export default router
