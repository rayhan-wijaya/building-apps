import React, { useState } from 'react';

import { trpc } from 'utils/trpc'; 

import { RegisterResponse } from 'schemas/registerResponse';

import TextQuestion from 'components/question/TextQuestion';
import RadioQuestion from 'components/question/RadioQuestion';
import DateQuestion from 'components/question/DateQuestion';

const RegisterForm = () => {
	const [currentAnswers, setCurrentAnswers] = useState<Partial<RegisterResponse>>({});
	const [selectedBirthDate, setSelectedBirthDate] = useState<Date>();

	const registerMutation = trpc.registerForm.respond.useMutation();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setCurrentAnswers(prev => (
			{
				...prev,
				[name]: value,
			}
		));
	}

	const handleBirthDateInputChange = (date: Date) => {
		setSelectedBirthDate(date);

		setCurrentAnswers(prev => (
			{
				...prev,
				birthDate: date,
			}
		));
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		registerMutation.mutate({
			answers: (currentAnswers as RegisterResponse)
		});
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
					onChange={handleInputChange}
				/>

				<TextQuestion
					name="nickname"
					type="text"
					question="Nickname"
					placeholder={'Your nickname'}
					spellCheck={false}
					required={true}
					onChange={handleInputChange}
				/>
				
				<RadioQuestion
					name="gender"
					question="Gender"
					options={[
						{
							text: 'Male',
							value: 'male',
						},
						{
							text: 'Female',
							value: 'female',
						},
					]}
					onChange={handleInputChange}
					required={true}
				/>

				<DateQuestion
					name="birthDate"
					question="Birth Date"
					onChange={handleBirthDateInputChange}
					selected={selectedBirthDate}
					showMonthDropdown={true}
					showYearDropdown={true}
					dropdownMode="select"
					placeholderText="Your birth date"
					required={true}
				/>

				<TextQuestion
					name="education"
					type="text"
					question="Education"
					placeholder={'Your education (e.g. school, college)'}
					required={true}
					onChange={handleInputChange}
				/>

				<TextQuestion
					name="job"
					type="text"
					question="Job"
					placeholder={'Your job'}
					required={true}
					onChange={handleInputChange}
				/>

				<TextQuestion
					name="phoneNumber"
					type="tel"
					question="Phone Number"
					placeholder={'Your phone number'}
					required={true}
					onChange={handleInputChange}
				/>

				<TextQuestion
					name="email"
					type="email"
					question="Email"
					placeholder={'Your email'}
					required={true}
					onChange={handleInputChange}
					maxLength={320}
				/>

				<TextQuestion
					name="address"
					type="text"
					question="Address"
					placeholder={'Your home address'}
					required={true}
					onChange={handleInputChange}
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
