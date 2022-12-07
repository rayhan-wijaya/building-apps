import React from 'react';
import QuestionLabel from 'components/question/QuestionLabel';

interface Option {
	text: string;
	value: string;
}

interface RadioQuestionProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	question: string;
	options: Option[];
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioQuestion = ({ question, options, onChange, ...rest }: RadioQuestionProps) => {
	return (
		<QuestionLabel question={question}>
			<div onChange={onChange} className="flex flex-col">
				{options.map(option => {
					return (
						<label key={option.value}>
							<input type="radio" value={option.value} {...rest} />
							{' '}
							<span>{option.text}</span>
						</label>
					);
				})}
			</div>
		</QuestionLabel>
	);
}

export default RadioQuestion;
