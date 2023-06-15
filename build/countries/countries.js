"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntryCountries = exports.primaryCountryData = exports.getEntryCountries = void 0;
const countries_json_1 = __importDefault(require("../countries/countries.json"));
const countries = countries_json_1.default;
const getEntryCountries = () => {
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
        };
    });
};
exports.getEntryCountries = getEntryCountries;
const primaryCountryData = () => {
    return countries.map(({ id, name, capital, population, flags }) => {
        return {
            id,
            name,
            capital,
            population,
            flags
        };
    });
};
exports.primaryCountryData = primaryCountryData;
const addEntryCountries = (newCountryEntry) => {
    const newCountry = Object.assign({ id: Math.max(...countries.map(d => d.id)) + 1 }, newCountryEntry);
    countries.push(newCountry);
    return newCountry;
};
exports.addEntryCountries = addEntryCountries;
