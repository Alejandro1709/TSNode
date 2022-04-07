export type Type = 'Learning' | 'Surviving' | 'Working'

export interface DiaryEntry {
  id: number
  title: string
  type: Type
  content: string
}
