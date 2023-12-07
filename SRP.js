function checkAnswers1() {
    
    const correctAnswers = { q1: 'c', q2: 'c', q3:'b', q4:'c', q5:'c' };
    
    const form = document.getElementById('quiz1');
    let score = 0;

    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = form.elements[questionName].value;

        if (selectedAnswer === correctAnswers[questionName]) {
            score++;
        }
    }

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerHTML = `Your score: ${score} out of ${Object.keys(correctAnswers).length}`;
}

function checkAnswers2() {
    
    const correctAnswers = { q1: 'b', q2: 'd', q3:'b', q4:'a', q5:'b' };
    
    const form = document.getElementById('quiz2');
    let score = 0;

    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = form.elements[questionName].value;

        if (selectedAnswer === correctAnswers[questionName]) {
            score++;
        }
    }

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerHTML = `Your score: ${score} out of ${Object.keys(correctAnswers).length}`;
}

function checkAnswers3() {
    
    const correctAnswers = { q1: 'c', q2: 'b', q3:'c', q4:'b', q5:'d' };
    
    const form = document.getElementById('quiz3');
    let score = 0;

    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = form.elements[questionName].value;

        if (selectedAnswer === correctAnswers[questionName]) {
            score++;
        }
    }

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerHTML = `Your score: ${score} out of ${Object.keys(correctAnswers).length}`;
}

function checkAnswers4() {
    
    const correctAnswers = { q1: 'b', q2: 'a', q3:'c', q4:'b', q5:'c' };
    
    const form = document.getElementById('quiz4');
    let score = 0;

    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = form.elements[questionName].value;

        if (selectedAnswer === correctAnswers[questionName]) {
            score++;
        }
    }

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerHTML = `Your score: ${score} out of ${Object.keys(correctAnswers).length}`;
}

function checkAnswers5() {
    
    const correctAnswers = { q1: 'a', q2: 'c', q3:'c', q4:'c', q5:'c' };
    
    const form = document.getElementById('quiz5');
    let score = 0;

    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = form.elements[questionName].value;

        if (selectedAnswer === correctAnswers[questionName]) {
            score++;
        }
    }

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerHTML = `Your score: ${score} out of ${Object.keys(correctAnswers).length}`;
}

function checkAnswers6() {
    
    const correctAnswers = { q1: 'c', q2: 'c', q3:'c', q4:'d', q5:'b' };
    
    const form = document.getElementById('quiz6');
    let score = 0;

    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = form.elements[questionName].value;

        if (selectedAnswer === correctAnswers[questionName]) {
            score++;
        }
    }

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerHTML = `Your score: ${score} out of ${Object.keys(correctAnswers).length}`;
}
