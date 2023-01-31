import React, { useState } from 'react';

const Quiz = () => {
	const questions = [
        {
			questionText: 'Mental health is an important part of our overall health and well-being. Mental health well-being includes which of the following?',
			answerOptions: [
				{ answerText: 'Emotional', isCorrect: false },
				{ answerText: 'Psychological', isCorrect: false },
				{ answerText: 'Social', isCorrect: false },
				{ answerText: 'All the above', isCorrect: true },
			],
		},    
		{
			questionText: 'According to the CDC, approximately how many Americans are currently living with a mental health condition?',
			answerOptions: [
				{ answerText: '15%', isCorrect: false },
				{ answerText: '10%', isCorrect: false },
				{ answerText: '20%', isCorrect: true },
				{ answerText: '40%', isCorrect: false },
			],
		},
		{
			questionText: 'Suicide is the ___ leading cause of death amongst people ages 15-34 in the US.',
			answerOptions: [
				{ answerText: '2nd', isCorrect: true },
				{ answerText: '25th', isCorrect: false },
				{ answerText: '8th', isCorrect: false },
				{ answerText: '12th', isCorrect: false },
			],
		},
		{
			questionText: 'Can mental illness can be treated?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
        {
			questionText: 'If you know someone suffering from a mental illness, how can you help?',
			answerOptions: [
				{ answerText: 'Helping them gain access to mental health services', isCorrect: false },
				{ answerText: 'Learning and sharing facts about mental health', isCorrect: false },
                { answerText: 'Reaching out and letting them know that help is available', isCorrect: false },
                { answerText: 'All the above', isCorrect: true },
			],
		},
        {
			questionText: 'Which of the following is not considered amongst the three most common diagnoses of mental health in the US?',
			answerOptions: [
				{ answerText: 'PTSD', isCorrect: false },
                { answerText: 'OCD', isCorrect: true },
				{ answerText: 'Anxiety', isCorrect: false },
                { answerText: 'Depression', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="quiz-button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;