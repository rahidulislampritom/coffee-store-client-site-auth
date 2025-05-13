import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'

const SignIn = () => {

    const { authSignInUser } = useContext(AuthContext);

    const handleUserSignInSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset()
        authSignInUser(email, password)
            .then((result) => {
                console.log(result.user)
                const lastSignInTime = result?.user?.metadata?.lastSignInTime
                const logInInfo = {
                    email,
                    lastSignInTime
                }
                fetch('http://localhost:1000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(logInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('working for lastSignInTime', data)
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Signin successful!",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
            })
            .catch((err) => {
                console.l0g('signin user', err.message)
            })

    }
    return (
        <div className='max-w-7xl mx-auto '>
            <Navbar></Navbar>
            <div className="hero bg-base-200 pt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full md:min-w-xl shrink-0 shadow-2xl p-5">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleUserSignInSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label ">Email</label>
                                    <input name='email' type="email" className="input w-full" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input w-full" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Signin</button>
                                </fieldset>
                            </form>
                            <h2>Don't have an Account?
                                <Link to={'/signup'}>
                                    <button className='btn btn-link'>SignUp</button>
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;