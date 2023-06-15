import { NewCountryEntry, AltSpellings } from './types'

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }

  return nameFromRequest
}

const parseCapital = (capitalFromRequest: any): string => {
  if (!isString(capitalFromRequest)) {
    throw new Error('Incorrect or missing capital')
  }

  return capitalFromRequest
}

const parseSubregion = (subregionFromRequest: any): string => {
  if (!isString(subregionFromRequest)) {
    throw new Error('Incorrect or missing subregion')
  }

  return subregionFromRequest
}

const parseRegion = (regionFromRequest: any): string => {
  if (!isString(regionFromRequest)) {
    throw new Error('Incorrect or missing subregion')
  }

  return regionFromRequest
}

const parsePopulation = (populationFromRequest: any): number => {
  if (!isString(populationFromRequest)) {
    throw new Error('Incorrect or missing subregion')
  }

  return populationFromRequest
}

const parseAltSpellings = (altSpellingsFromRequest: any): AltSpellings => {
  if (!isString(altSpellingsFromRequest)) {
    throw new Error('Incorrect or missing subregion')
  }

  return altSpellingsFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const toNewCountryEntry = (object: any): NewCountryEntry => {
  const newEntry: NewCountryEntry = {
    name: parseName(object.name),
    capital: parseCapital(object.capital),
    subregion: parseSubregion(object.subregion),
    region: parseRegion(object.region),
    population: parsePopulation(object.population),
    flags: parseFlags(object.flags),
    altSpellings: parseAltSpellings(object.altSpellings)

  }
  return newEntry
}

export default toNewCountryEntry
