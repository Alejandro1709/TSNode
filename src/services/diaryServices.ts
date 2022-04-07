import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry } from './types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getNonSensitiveEntries = (): NonSensitiveInfoDiaryEntry[] => diaries
