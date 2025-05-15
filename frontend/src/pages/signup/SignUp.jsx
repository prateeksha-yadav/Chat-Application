import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const res = await fetch("https://chat-application-11-8yfx.onrender.com/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || "Signup failed");
			}

			setSuccess(true);
			setInputs({
				fullName: "",
				username: "",
				password: "",
				confirmPassword: "",
				gender: "",
			});
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
<<<<<<< HEAD
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up <span className="text-blue-500">ChatApp</span>
=======
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-300'>
				<h1 className='text-3xl font-semibold text-center text-orange-800 mb-6'>
					Welcome to <span className='text-amber-600'>ChatApp</span>
>>>>>>> 6c2a2ed (fix: use deployed backend URL for all API calls in production)
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
<<<<<<< HEAD
						<label className="label p-2">
							<span className="text-base label-text">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="John Doe"
							className="w-full input input-bordered h-10"
=======
						<label className='label p-2'>
							<span className='text-base label-text text-orange-800'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered h-10 bg-orange-50 border-orange-300 focus:border-amber-500 focus:ring-amber-500'
>>>>>>> 6c2a2ed (fix: use deployed backend URL for all API calls in production)
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
<<<<<<< HEAD
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							placeholder="johndoe"
							className="w-full input input-bordered h-10"
=======
						<label className='label p-2'>
							<span className='text-base label-text text-orange-800'>Username</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-10 bg-orange-50 border-orange-300 focus:border-amber-500 focus:ring-amber-500'
>>>>>>> 6c2a2ed (fix: use deployed backend URL for all API calls in production)
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
<<<<<<< HEAD
						<label className="label">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
=======
						<label className='label'>
							<span className='text-base label-text text-orange-800'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 bg-orange-50 border-orange-300 focus:border-amber-500 focus:ring-amber-500'
>>>>>>> 6c2a2ed (fix: use deployed backend URL for all API calls in production)
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
<<<<<<< HEAD
						<label className="label">
							<span className="text-base label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10"
=======
						<label className='label'>
							<span className='text-base label-text text-orange-800'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 bg-orange-50 border-orange-300 focus:border-amber-500 focus:ring-amber-500'
>>>>>>> 6c2a2ed (fix: use deployed backend URL for all API calls in production)
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox
						onCheckboxChange={handleCheckboxChange}
						selectedGender={inputs.gender}
					/>

					{error && <p className="text-red-500 mt-2">{error}</p>}
					{success && <p className="text-green-500 mt-2">Signup successful!</p>}

					<Link
<<<<<<< HEAD
						to="/login"
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
=======
						to={"/login"}
						className='text-sm hover:underline hover:text-amber-600 mt-2 inline-block text-orange-700'
>>>>>>> 6c2a2ed (fix: use deployed backend URL for all API calls in production)
					>
						Already have an account?
					</Link>

					<div>
<<<<<<< HEAD
						<button
							type="submit"
							className="btn btn-block btn-sm mt-2 border border-slate-700"
							disabled={loading}
						>
							{loading ? <span className="loading loading-spinner" /> : "Sign Up"}
=======
						<button 
							className='btn btn-block btn-sm mt-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none hover:from-orange-600 hover:to-amber-600' 
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
>>>>>>> 6c2a2ed (fix: use deployed backend URL for all API calls in production)
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
