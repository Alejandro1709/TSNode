import { Router, Request, Response } from 'express'
import { getEntries, findById, createDiaryEntry } from '../services/diaryServices'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
  res.send(getEntries())
})

router.get('/:id', (req: Request, res: Response) => {
  res.send(findById(parseInt(req.params.id)))
})

router.post('/', (req: Request, res: Response) => {
  const { title, type, content } = req.body

  const newEntry = createDiaryEntry({ title, type, content })

  res.send(newEntry)
})

export default router
