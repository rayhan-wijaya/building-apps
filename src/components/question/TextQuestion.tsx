import React from 'react';
import QuestionLabel from 'components/question/QuestionLabel';

interface TextQuestionProps extends React.InputHTMLAttributes<HTMLInputElement> {
	question: string;
}

const TextQuestion = ({ name, question, type = 'text', ...rest }: TextQuestionProps) => {
	return (
		<>
			<QuestionLabel question={question}>
				<input
					className="block w-full transition-[border] focus:outline-none font-semibold"
					name={name}
					type={type}
					{...rest}
				/>
			</QuestionLabel>
		</>
	);
}

export default TextQuestion;
