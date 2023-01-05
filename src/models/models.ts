export interface ICard {
  id: number
  first_name: string
  height_feet: number
  height_inches: number
  last_name: string
  position: string
  team: {
    id: number
    abbreviation: string
    city: string
    conference: string
    division: string
    full_name: string
    name: string
  }
  weight_pounds: number
}

export interface ICardFilter {
  id: number
  city: string
  name: string
}

export interface ISelect {
  city: string
  name: string
}

export interface ServerResponse<T> {
  data: T[]
  meta: {
    total_pages: number
    current_page: number
    next_page: number
    per_page: number
    total_count: number
  }
}
