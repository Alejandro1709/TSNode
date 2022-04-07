export type Type = 'Learning' | 'Surviving' | 'Working'

export interface DiaryEntry {
  id: number
  title: string
  type: Type
  content: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'title' | 'type'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'content'>
