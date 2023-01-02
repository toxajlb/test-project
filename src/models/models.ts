export interface ICard {
  id: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
}

export interface ServerResponse<T> {
  data: T[]
  meta: {
    total_pages: number, 
    current_page: number, 
    next_page: null, 
    per_page: number, 
    total_count: number
  }
}