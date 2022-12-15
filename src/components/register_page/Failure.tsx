import Link from 'next/link';
import { useEffect } from "react";

interface FailureComponents {
    ResponseLimit: React.FC;
}

const Failure: FailureComponents = {
    ResponseLimit: () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return (
            <div className="flex flex-col items-center gap-12 pt-72 pb-64">
		    	<div className="flex flex-col items-center gap-5">
		    		<h1 className="font-semibold text-3xl text-center">Sorry!</h1>

		    		<p className="text-lg text-center">It seems like the limited amount of participants has reached.</p>
		    		<p className="text-lg text-center">Please try again later!</p>
		    	</div>

		    	<Link href="/" className="button-primary bg-cool-blue-900 text-white">
                    Go Back Home
                </Link>
		    </div>
        );
    },
};

export default Failure;