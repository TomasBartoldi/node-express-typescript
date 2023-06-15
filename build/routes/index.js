"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const countries_1 = require("../countries/countries");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send((0, countries_1.getEntryCountries)());
});
router.get('/primaryCountries', (_req, res) => {
    res.send((0, countries_1.primaryCountryData)());
});
router.post('/', (req, res) => {
    try {
        const newCountryEntry = toNewCountryEntry(req.body);
        const addedCountryEntry = (0, countries_1.addEntryCountries)(newCountryEntry);
        res.json(addedCountryEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
