import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-300'>
				<h1 className='text-3xl font-semibold text-center text-orange-800 mb-6'>
					Welcome to <span className='text-amber-600'>ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-orange-800'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered h-10 bg-orange-50 border-orange-300 focus:border-amber-500 focus:ring-amber-500'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-orange-800'>Username</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-10 bg-orange-50 border-orange-300 focus:border-amber-500 focus:ring-amber-500'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-orange-800'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 bg-orange-50 border-orange-300 focus:border-amber-500 focus:ring-amber-500'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-orange-800'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 bg-orange-50 border-orange-300 focus:border-amber-500 focus:ring-amber-500'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to={'/login'}
						className='text-sm hover:underline hover:text-amber-600 mt-2 inline-block text-orange-700'
					>
						Already have an account?
					</Link>

					<div>
						<button 
							className='btn btn-block btn-sm mt-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none hover:from-orange-600 hover:to-amber-600' 
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
