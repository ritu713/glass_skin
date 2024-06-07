import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { LoginFormData } from "../../../Server/shared/types"
import { useMutation, useQueryClient } from "react-query"
import * as apiClient from '../apiClient'


const Login = () => {
	const {register, handleSubmit, formState: {errors}} = useForm<LoginFormData>()
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const mutation = useMutation(apiClient.login, {
		onSuccess : async () => {
			await queryClient.invalidateQueries("validateToken");
			await queryClient.invalidateQueries("fetchCurrentUser")
			navigate('/')
		},
		onError : (err:any) => {
			alert("Looks like something went wrong!"+ err.message)
		}
	})

	const onSubmit = handleSubmit((form_data) => mutation.mutate(form_data))
	return (
		<form onSubmit={onSubmit}>
			<div className="flex flex-col items-center">
				<h2 className="text-4xl text-stone-500 font-semibold mt-5">Sign in</h2>
				<div className="mt-10 p-10 bg-violet-100 rounded-xl shadow"> 
					<label className='font-semibold flex-1'>
						Email 
						<input type='text' 
						className='rounded border border-2 w-full mb-3'
						{...register("emailID", {required : "Please enter your registered email"})}></input>

						{errors.emailID &&
						<p className="text-red-500 font-normal text-sm">{errors.emailID.message}</p>
						}
					</label>

					<label className='font-semibold flex-1'>
						Password 
						<input type='password' 
						className='rounded border border-2 w-full mb-3'
						{...register("password", {required : "Please enter your password", minLength: 8})}></input>
						{errors.password &&
						<p className="text-red-500 font-normal text-sm">{errors.password.message}</p>
						}
					</label>
				
					<button type="submit" className="py-2 px-5 bg-violet-500 rounded font-bold text-white mt-3">Login</button>
					<br/>
					<span className="float-right">Dont have an account? <Link to='/register' className="text-blue-700 underline">Register here</Link></span>
				
				</div>
			</div>
		</form>
	)
}

export default Login
