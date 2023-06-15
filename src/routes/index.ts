import express from 'express'
import { addEntryCountries, getEntryCountries, primaryCountryData } from '../countries/countries'
import { Countries } from '../types'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getEntryCountries())
})

router.get('/primaryCountries', (_req, res) => {
  res.send(primaryCountryData())
})

router.post('/', (req, res) => {
  try {
    const newCountryEntry = toNewCountryEntry(req.body)

    const addedCountryEntry: Countries[] = addEntryCountries(newCountryEntry)
    res.json(addedCountryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
