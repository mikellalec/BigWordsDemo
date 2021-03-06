import React, { useState, useEffect } from "react";
import Response from "./Response.js";
import GameBox from "./GameBox.js";

function LeftSide({
	points,
	setPoints,
	setOver,
	question,
	counter,
	setCounter,
	submitted,
	setSubmitted,
	value,
	setValue,
	score,
	setScore,
	correctWords,
	setCorrectWords,
	prefix,
	suffix,
	root,
}) {
	let [correct, setCorrect] = useState(false);

	useEffect(() => {
		if ((correct && points < 6 && points > 0) || points == 0) {
			if (correct && points < 6 && points > 0) {
				setScore(score + points);
				setCorrectWords([
					...correctWords,
					String(question.answer).replace(/[_]+/g, ""),
				]);
			}
			setCounter(counter + 1);
			setOver(true);
		} //when the game is over
		setValue("")
	}, [points]); //reaction based on change of points
	return (
		<span>
			<Response
				submitted={submitted}
				correct={correct}
				question={question}
				points={points}
				value={value}
			></Response>
			<GameBox
				submitted={submitted}
				setSubmitted={setSubmitted}
				setCorrect={setCorrect}
				question={question}
				points={points}
				setPoints={setPoints}
				value={value}
				setValue={setValue}
				suffix={suffix}
				root={root}
				prefix={prefix}
			></GameBox>
		</span>
	);
}

export default LeftSide;
