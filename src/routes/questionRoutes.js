const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;

const getQuestions = async () => {
    const filePath = path.join(__dirname, '../public/data/questions.json');
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data).questions;
};

router.get('/questions', async (req, res) => {
    try {
        const questions = await getQuestions();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/random-question', async (req, res) => {
    try {
        const questions = await getQuestions();
        const randomIndex = Math.floor(Math.random() * questions.length);
        res.json(questions[randomIndex]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;