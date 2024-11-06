let usedQuestions = new Set();
let correctAnswers = 0;
let totalAnswered = 0;
let questions = [];

async function loadQuestions() {
    try {
        const response = await fetch('/api/questions');
        questions = await response.json();
        displayQuestion(getRandomQuestion());
    } catch (error) {
        console.error('Erro ao carregar questões:', error);
    }
}

function getRandomQuestion() {
    const availableQuestions = questions.filter(q => !usedQuestions.has(q.id));
    if (availableQuestions.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    usedQuestions.add(question.id);
    return question;
}

// ... resto do código JavaScript do cliente permanece o mesmo ...

// Inicializar o quiz
document.addEventListener('DOMContentLoaded', loadQuestions);