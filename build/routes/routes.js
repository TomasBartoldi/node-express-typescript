"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    console.log('fetch all');
    res.send('Fetching all entry data');
});
router.post('/', (_req, res) => {
    res.send('Saving data');
});
exports.default = router;
