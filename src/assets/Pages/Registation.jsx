
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { Helmet } from "react-helmet";




const Registation = () => {

    const { createUser, updateUserProfile, loading, googlelogin } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const axiosPublic = UseAxiosPublic()


    const onSubmit = data => {


        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database

                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: 'guest',
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {

                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'SignUp Successfull.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
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
                        console.log(res.data)
                        navigate('/');
                    })
            })

    };


    return (
        <>

            <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
                <Helmet>
                    <title>Sign up</title>
                </Helmet>
                <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                    <div
                        className='hidden bg-cover bg-center lg:block lg:w-1/2'
                        style={{
                            backgroundImage: `url('https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1717853176~exp=1717856776~hmac=d141c2ce9083eeacbaad1894f93756d853625309fbff65a7a240fdeb30126028&w=826')`,
                        }}
                    ></div>

                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                        <div className='flex justify-center mx-auto'>
                            <img
                                className='w-auto h-7 sm:h-8'
                                src='https://merakiui.com/images/logo.svg'
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
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
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
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#0055B4] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  md:w-1/4'></span>

                            <Link
                                to='/login'
                                className='text-xs text-gray-500 uppercase  hover:underline'
                            >
                                or sign in
                            </Link>

                            <span className='w-1/5 border-b  md:w-1/4'></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registation;