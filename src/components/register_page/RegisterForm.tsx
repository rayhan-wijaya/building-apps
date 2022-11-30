import React, { useState } from 'react';

import { trpc } from 'utils/trpc'; 

interface TextQuestionProps extends React.InputHTMLAttributes<HTMLInputElement> {
	question: string;
}

const TextQuestion = ({ name, question, type = 'text', ...rest }: TextQuestionProps) => {
	return (
		<>
			<label className="bg-white p-5 md:w-[700px] w-[80%] transition-all focus-within:shadow-md border-gray-100 border-2 focus-within:border-cool-blue-800 mb-2 rounded-lg">
				<div className="block mb-2">{question} {' '}</div>

				<input
					className="block w-full py-[1] transition-[border] focus:outline-none font-semibold"
					name={name}
					type={type}
					{...rest}
				/>
			</label>
		</>
	);
}; 

interface Answers {
	fullName: string;
	nickname: string;
	email: string;
	phoneNumber: string;
}

const RegisterForm = () => {
	const [answers, setAnswers] = useState<Answers>({
		fullName: '',
		nickname: '',
		email: '',
		phoneNumber: '',
	});

	const registerMutation = trpc.registerForm.respond.useMutation();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		
		setAnswers(prevAnswers => {
			if (prevAnswers === undefined) {
				return prevAnswers;
			}

			return {
				...prevAnswers,
				[name]: value,
			};
		});
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		registerMutation.mutate({ answers });
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-center items-center gap-4"
			>
				<TextQuestion
					name="fullName"
					type="text"
					question="Full Name"
					placeholder={'Your full name'}
					spellCheck={false}
					required={true}
					onChange={handleChange}
				/>

				<TextQuestion
					name="nickname"
					type="text"
					question="Nickname"
					placeholder={'Your nickname'}
					spellCheck={false}
					required={true}
					onChange={handleChange}
				/>

				<TextQuestion
					name="email"
					type="email"
					question="Email"
					placeholder={'Your email'}
					required={true}
					onChange={handleChange}
				/>

				<TextQuestion
					name="phoneNumber"
					type="tel"
					question="Phone Number"
					placeholder={'Your phone number'}
					required={true}
					onChange={handleChange}
				/>

				<input
					className="focus:border-cool-blue-700 border-transparent border-[3px] transition-all outline-none text-white bg-cool-blue-900 rounded-lg w-[200px] py-2"
					type="Submit"
					value="Submit"
				/>

				<input type="reset" />
			</form>
		</div>
	);
}

export default RegisterForm;
