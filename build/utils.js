"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest)) {
        throw new Error('Incorrect or missing name');
    }
    return nameFromRequest;
};
const parseCapital = (capitalFromRequest) => {
    if (!isString(capitalFromRequest)) {
        throw new Error('Incorrect or missing capital');
    }
    return capitalFromRequest;
};
const parseSubregion = (subregionFromRequest) => {
    if (!isString(subregionFromRequest)) {
        throw new Error('Incorrect or missing subregion');
    }
    return subregionFromRequest;
};
const parseRegion = (regionFromRequest) => {
    if (!isString(regionFromRequest)) {
        throw new Error('Incorrect or missing subregion');
    }
    return regionFromRequest;
};
const parsePopulation = (populationFromRequest) => {
    if (!isString(populationFromRequest)) {
        throw new Error('Incorrect or missing subregion');
    }
    return populationFromRequest;
};
const parseAltSpellings = (altSpellingsFromRequest) => {
    if (!isString(altSpellingsFromRequest)) {
        throw new Error('Incorrect or missing subregion');
    }
    return altSpellingsFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const toNewCountryEntry = (object) => {
    const newEntry = {
        name: parseName(object.name),
        capital: parseCapital(object.capital),
        subregion: parseSubregion(object.subregion),
        region: parseRegion(object.region),
        population: parsePopulation(object.population),
        flags: parseFlags(object.flags),
        altSpellings: parseAltSpellings(object.altSpellings)
    };
    return newEntry;
};
exports.default = toNewCountryEntry;
