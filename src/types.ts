export type AltSpellings = string[]

export interface FlagsData { svg: string, png: string }

export interface Countries {
  id: number
  name: string
  capital: string
  subregion: string
  region: string
  population: number
  flags: FlagsData
  altSpellings: AltSpellings
}

export type PrimaryCountryData = Pick<Countries, 'name' | 'capital' | 'population' | 'flags'>
export type NewCountryEntry = Omit<Countries, 'id'>
