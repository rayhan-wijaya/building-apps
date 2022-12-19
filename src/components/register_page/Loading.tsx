import { useEffect } from 'react';

interface LoadingComponents {
    CheckingResponses: React.FC;
}

const Loading: LoadingComponents = {
    CheckingResponses: () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return (
            <div className="flex flex-col items-center gap-12 pt-72 pb-64">
		    	<div className="flex flex-col items-center gap-5">
		    		<h1 className="font-semibold text-3xl text-center">Checking Responses..</h1>

		    		<p className="text-lg text-center">Please wait while we check the registration responses</p>
		    	</div>
            </div>
        );
    }
}

export default Loading;