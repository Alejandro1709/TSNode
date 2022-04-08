import diaryData from './diaries.json'
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from './types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
  const diary = diaries.find(d => d.id === id)

  if (diary !== null) {
    return undefined
  }
  return diary
}

export const getNonSensitiveEntries = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, title, type }) => {
    return {
      id,
      title,
      type
    }
  })
}

export const createDiaryEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}
