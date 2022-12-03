import React, { useState } from 'react';

import Head from 'next/head';

import RegisterForm from 'components/register_page/RegisterForm';
import FormHeadline from 'components/register_page/FormHeadline';
import Success from 'components/register_page/Success';

import Footer from 'components/Footer';

const Register = () => {
	const [hasRegistered, setHasRegistered] = useState(false);

	return (
		<>
			<Head>
				<title>Register • Building Apps</title>
			</Head>

			<main>

				{
					hasRegistered
					? <Success />
					: <div className="mb-28">
						<FormHeadline />
						<RegisterForm setHasRegistered={setHasRegistered} />
					</div>
				}

				<Footer includeRegisterCard={false} />
			</main>
		</>
	);
}

export default Register;
