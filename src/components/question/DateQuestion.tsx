import React from 'react';

import DatePicker from 'react-datepicker';
import type { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import QuestionLabel from 'components/question/QuestionLabel';

interface DateQuestionProps extends ReactDatePickerProps {
	question: string;
}

const DateQuestion = ({ question, onChange, selected, ...rest }: DateQuestionProps) => {
	return (
		<QuestionLabel question={question}>
			<DatePicker
				dateFormat="dd/MM/yyyy"
				onChange={onChange ?? (date => console.log(date))}
				selected={selected}
				adjustDateOnChange={true}
				{...rest}
			/>
		</QuestionLabel>
	);
}

export default DateQuestion;
