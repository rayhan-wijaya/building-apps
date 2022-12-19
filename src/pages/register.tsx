
import React, { useState, useEffect } from 'react';

import Head from 'next/head';

import RegisterForm from 'components/register_page/RegisterForm';
import FormHeadline from 'components/register_page/FormHeadline';
import Success from 'components/register_page/Success';
import Failure from 'components/register_page/Failure';
import Loading from 'components/register_page/Loading';

import Footer from 'components/Footer';

import { trpc } from 'utils/trpc';

interface RegisterContentProps {
	canRespond: boolean | undefined;
	hasRegistered: boolean;
	setHasRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterContent: React.FC<RegisterContentProps> = ({ canRespond, hasRegistered, setHasRegistered }) => {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		if (hasRegistered && !hasScrolled) {
			window.scrollTo(0, 0);
			setHasScrolled(true);
		}
	}, [hasRegistered]);

	if (canRespond === undefined) {
		return (
	    	<Loading.CheckingResponses />
		);
	}

	if (!canRespond) {
		return (
			<Failure.ResponseLimit />
		);
	}

	return (
		<>
		    {
		        hasRegistered
		        ? <Success />
				: <div className="mb-28">
					<FormHeadline />
					<RegisterForm setHasRegistered={setHasRegistered} />
				</div>
		    }
		</>
	);
}

const Register = () => {
	const [hasFetchedCanRespond, setHasFetchedCanRespond] = useState(false);

	const { data: canRespond } = trpc.registerForm.canRespond.useQuery(undefined, {
		onSuccess: () => setHasFetchedCanRespond(true),
		enabled: !hasFetchedCanRespond,
	});

	const [hasRegistered, setHasRegistered] = useState(false);

	return (
		<>
			<Head>
				<title>Register • Building Apps</title>
			</Head>
			
			<main>
				<RegisterContent
					canRespond={canRespond}
					hasRegistered={hasRegistered}
					setHasRegistered={setHasRegistered}
				/>

				<Footer includeRegisterCard={false} />
			</main>
		</>
	);
}

export default Register;
