import { Link } from "react-router-dom";




const ErrorPage = () => {
    return (

        <section className="bg-teal-600 text-white max-w-5xl mx-auto rounded-2xl max-sm:mx-5 mt-4  md:mt-10">
            <div className="flex flex-col justify-center px-16 mx-auto py-10 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    </h1>
                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/'><button type="button" className="btn relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Go to Home
                            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">New</span>
                        </button></Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-[650px]">
                    <img src='https://i.ibb.co/K2G4FKy/404-error-with-man-thinking-24908-77772.jpg' />
                </div>
            </div>
        </section>

    );
};

export default ErrorPage;