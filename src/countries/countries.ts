import countriesJson from '../countries/countries.json'
import { Countries, PrimaryCountryData, NewCountryEntry } from '../types'

const countries: Countries[] = countriesJson as Countries[]

export const getEntryCountries = (): Countries[] => {
  return countries.map((e) => {
    return {
      id: e.id,
      name: e.name,
      capital: e.capital,
      subregion: e.subregion,
      region: e.region,
      population: e.population,
      flags: e.flags,
      altSpellings: e.altSpellings
    }
  })
}

export const primaryCountryData = (): PrimaryCountryData[] => {
  return countries.map(({ id, name, capital, population, flags }) => {
    return {
      id,
      name,
      capital,
      population,
      flags
    }
  })
}

export const addEntryCountries = (newCountryEntry: NewCountryEntry): Countries[] => {
  const newCountry = {
    id: Math.max(...countries.map(d => d.id)) + 1,
    ...newCountryEntry
  }

  countries.push(newCountry)
  return newCountry
}
