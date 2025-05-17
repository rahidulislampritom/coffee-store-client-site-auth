import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SignUp = () => {

    const { authSignUp } = useContext(AuthContext);
    // console.log(authSignUp);

    const handleSignUpSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        form.reset()

        authSignUp(email, password)
            .then((result) => {
                console.log(result.user);
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt }
                fetch('https://coffee-store-server-five-mu.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedID) {
                            console.log('user created in db')
                        }
                    })

            })
            .catch((err) => {
                console.log('signUp Error', err.message);
            })

    }
    return (
        <div className='max-w-7xl mx-auto '>
            <Navbar></Navbar>
            <div className="hero bg-base-200 pt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full md:min-w-xl shrink-0 shadow-2xl p-5">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleSignUpSubmit}>

                                <fieldset className="fieldset">
                                    <label className="label ">Name</label>
                                    <input name='name' type="text" className="input w-full" placeholder="Name" />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label ">Photo</label>
                                    <input name='photo' type="text" className="input w-full" placeholder="Photo URL" />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label ">Email</label>
                                    <input name='email' type="email" className="input w-full" placeholder="Email" />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input w-full" placeholder="Password" />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <button className="btn btn-neutral mt-4">Signup</button>
                                </fieldset>
                            </form>
                            <h2>Have an Account?
                                <Link to={'/signin'}>
                                    <button className='btn btn-link'>Signin</button>
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;