import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import { Helmet } from 'react-helmet';
import Navbar from '../Component/Navbar';

const Login = () => {

    const { googlelogin, loading, signIn } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const axiosPublic = UseAxiosPublic()


    const onSubmit = data => {

        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success('Sign in successful')
                navigate('/')

            })
            .catch(error => {
                console.log(error)
                toast.error(error)
            })



    };
    const handleSignIn = () => {

        googlelogin()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'guest',

                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    };


    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)] mt-5'>
                <Helmet>
                    <title>Sign in</title>
                </Helmet>

                <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>

                    <div
                        className='hidden bg-cover bg-center lg:block lg:w-1/2'
                        style={{
                            backgroundImage: `url('https://i.ibb.co/zP5XXg3/member-log-membership-username-password-concept.jpg')`,
                        }}
                    ></div>

                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                        <div className='flex justify-center mx-auto'>
                            <img
                                className='w-auto h-7 sm:h-8'
                                src='https://i.ibb.co/zP5XXg3/member-log-membership-username-password-concept.jpg'
                                alt=''
                            />
                        </div>

                        <p className='mt-3 text-xl text-center text-gray-600 '>
                            Welcome back!
                        </p>

                        <div className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>


                            <button
                                // disabled={loading}
                                onClick={handleSignIn}
                                className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                            >
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                            </button>
                        </div>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  lg:w-1/4'></span>

                            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                                or login with email
                            </div>

                            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,

                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="card-actions mt-4">
                                <button type="submit" className="relative w-[99%] mx-auto border border-lime-400 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                                    <span className="h-48 w-full rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">Submit</span>
                                </button>
                            </div>
                        </form>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  md:w-1/4'></span>

                            <Link
                                to='/registration'
                                className='text-xs text-gray-500 uppercase  hover:underline'
                            >
                                or sign up
                            </Link>

                            <span className='w-1/5 border-b  md:w-1/4'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;