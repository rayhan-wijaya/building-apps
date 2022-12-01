import React from 'react';

interface QuestionLabel {
	question: string;
	children: React.ReactNode;
}

const QuestionLabel = ({ question, children }: QuestionLabel) => {
	return (
		<label className="bg-white p-5 md:w-[700px] w-[80%] transition-all focus-within:shadow-md border-gray-100 border-2 focus-within:border-cool-blue-800 mb-2 rounded-lg">
			<div className="block mb-2">{question} {' '}</div>
			
			{children}
		</label>
	);
}

export default QuestionLabel;
