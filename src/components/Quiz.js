import React, { useState } from 'react';
import Button from "@mui/material/Button";

const Quiz = () => {
	const questions = [
        {
			questionText: 'Mental health is an important part of our overall health and well-being. Mental health well-being includes which of the following?',
			answerOptions: [
				{ answerText: 'Emotional', isCorrect: false, id:1 },
				{ answerText: 'Psychological', isCorrect: false, id:2 },
				{ answerText: 'Social', isCorrect: false, id:3 },
				{ answerText: 'All the above', isCorrect: true, id:4 },
			],
		},
		{
			questionText: 'This mental disorder is a common, chronic and long-lasting disorder in which a person has uncontrollable, reoccurring thoughts and/or behaviors that he or she feels the urge to repeat over and over.',
			answerOptions: [
				{ answerText: 'OCD', isCorrect: true, id:1 },
				{ answerText: 'Anxiety disorder', isCorrect: false, id:2 },
				{ answerText: 'Dissociative disorder', isCorrect: false, id:3 },
				{ answerText: 'Eating disorder', isCorrect: false, id:4 },
			],
		},    
		{
			questionText: 'According to the CDC, approximately how many Americans are currently living with a mental health condition?',
			answerOptions: [
				{ answerText: '15%', isCorrect: false, id:1 },
				{ answerText: '10%', isCorrect: false, id:2 },
				{ answerText: '20%', isCorrect: true, id:3 },
				{ answerText: '40%', isCorrect: false, id:4 },
			],
		},
		{
			questionText: 'Suicide is the ___ leading cause of death amongst people ages 15-34 in the US.',
			answerOptions: [
				{ answerText: '2nd', isCorrect: true, id:1 },
				{ answerText: '25th', isCorrect: false, id:2 },
				{ answerText: '8th', isCorrect: false, id:3 },
				{ answerText: '12th', isCorrect: false, id:4 },
			],
		},
		{
			questionText: 'This mental disorder is characterized by continuous or relapsing episodes of psychosis. Major symptoms include hallucinations, delusions and disorganized thinking.',
			answerOptions: [
				{ answerText: 'Bipolar disorder', isCorrect: false, id:1 },
				{ answerText: 'Schizophrenia', isCorrect: true, id:2 },
				{ answerText: 'Borderline personality disorder', isCorrect: false, id:3 },
				{ answerText: 'PTSD', isCorrect: false, id:4 },
			],
		},
		{
			questionText: 'Half of all lifetime mental illness begins by age ___, and 75% by age ___.',
			answerOptions: [
				{ answerText: '11, 30', isCorrect: false, id:1 },
				{ answerText: '15, 21', isCorrect: false, id:2 },
				{ answerText: '14, 24', isCorrect: true, id:3 },
				{ answerText: '21, 33', isCorrect: false, id:4 },
			],
		},
		{
			questionText: 'Can mental illness can be treated?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true, id:1 },
				{ answerText: 'False', isCorrect: false, id:2 },
			],
		},
        {
			questionText: 'Which of the following is not considered amongst the three most common diagnoses of mental health in the US?',
			answerOptions: [
				{ answerText: 'PTSD', isCorrect: false, id:1 },
                { answerText: 'Anxiety', isCorrect: false, id:2 },
				{ answerText: 'OCD', isCorrect: true, id:3 },
                { answerText: 'Depression', isCorrect: false, id:4 },
			],
		},
		{
			questionText: 'Which of the following factors could potentially result in a period of poor mental health?',
			answerOptions: [
				{ answerText: 'Social isolation', isCorrect: false, id:1 },
                { answerText: 'Chilhood trauma', isCorrect: false, id:2 },
				{ answerText: 'Bereavement', isCorrect: false, id:3 },
                { answerText: 'All the above', isCorrect: true, id:4 },
			],
		},
		{
			questionText: 'If you know someone suffering from a mental illness, how can you help?',
			answerOptions: [
				{ answerText: 'Helping them gain access to mental health services', isCorrect: false, id:1 },
				{ answerText: 'Learning and sharing facts about mental health', isCorrect: false, id:2 },
                { answerText: 'Reaching out and letting them know that help is available', isCorrect: false, id:3 },
                { answerText: 'All the above', isCorrect: true, id:4 },
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

	const handleTryAgain = () => {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0)
	}

	return (
		<div className='quiz' style={{width:"30vw"}}>
			{showScore ? (
				<div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly", width:"50vw", textAlign:"center", alignItems:"center", maxWidth:800, maxHeight:"20vh", fontSize:"1.3vw", alignSelf:"center"}}>
					<div className='score-section' style={{fontSize: "2.5vw"}}>
						You scored {score} out of {questions.length}!
					</div>
					<Button onClick={handleTryAgain} style={{border:"5px solid white", fontSize:"1.8vw", backgroundColor:"white", color:"#1e3987", borderRadius:20, width: "18vw", alignSelf:"center"}}>Try Again</Button>
				</div> 
			) : (
				<div style={{width:"50vw", maxWidth:800, maxHeight:"15vh"}}>
					<div style={{width:"30vw", height:"10vh"}}>
						<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", border:"3px solid white", borderRadius: 15, alignItems:"center", padding:10, marginBottom:10, width:"30vw", height:"10vh",maxWidth:800, textAlign:"center"}}>
						<div style={{fontSize:"1.5vw", color:"#cdd9fa"}}>Mental Health Quiz</div>
						<div className='question-count'>
								<span style={{fontSize: "1.5vw"}}>Question {currentQuestion + 1} of {questions.length} </span>
						</div>
					</div>
						<div className='question-section' style={{fontSize:"1.3vw"}}>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section' style={{fontSize: "1.1vw"}}>
							{questions[currentQuestion].answerOptions.map((answerOption) => {
								return <button key={answerOption.id} className="quiz-button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							})}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Quiz;