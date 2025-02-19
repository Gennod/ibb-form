import { useForm } from 'react-hook-form'

interface FormData {
	firstName: string
	secondName: string
	email: string
	message: string
	terms: boolean
}

export const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			firstName: '',
			secondName: '',
			email: '',
			message: '',
			terms: false,
		},
		mode: 'onChange',
	})

	const onSubmit = (data: FormData) => {
		console.log(data)
		reset()
	}

	console.log(errors)

	return (
		<div className='flex flex-col rounded-xl h-min p-6 shadow-lg outline outline-black/5 min-w-xsm sm:min-w-sm md:min-w-xl bg-white'>
			<h1 className='text-3xl text-left mb-5 font-bold'>Contact us</h1>
			<form
				className='flex flex-col justify-center gap-x-4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex justify-between shrink gap-x-4 mb-5 flex-col sm:flex-row'>
					<label className='flex flex-col pb-5 w-full'>
						First Name{' '}
						<input
							{...register('firstName', { required: 'Name is required' })}
							className={
								!errors.firstName
									? 'border focus:outline-none border-[#0C7D69]/50 rounded-sm p-2 w-full mt-2'
									: 'border focus:outline-none border-[#F44336] rounded-sm p-2 w-full mt-2'
							}
							type='text'
						/>
						{errors.firstName && (
							<span className='text-red-400'>This field is required</span>
						)}
					</label>
					<label className='flex flex-col w-full'>
						Second Name
						<input
							{...register('secondName', {
								required: 'Second Name is required',
							})}
							className={
								!errors.secondName
									? 'border focus:outline-none border-[#0C7D69]/50 rounded-sm p-2 w-full mt-2'
									: 'border focus:outline-none border-[#F44336]/50 rounded-sm p-2 w-full mt-2'
							}
							type='text'
						/>
						{errors.secondName && (
							<span className='text-red-400'>This field is required</span>
						)}
					</label>
				</div>
				<label className='flex flex-col mb-5'>
					Email Address
					<input
						{...register('email', { required: 'Email Address is required' })}
						aria-invalid={errors.email ? 'true' : 'false'}
						className={
							!errors.email
								? 'border focus:outline-none border-[#0C7D69]/50 rounded-sm p-2 w-full mt-2'
								: 'border focus:outline-none border-[#F44336]/50 rounded-sm p-2 w-full mt-2'
						}
						type='email'
					/>
					{errors.email && (
						<span className='text-red-400'>This field is required</span>
					)}
				</label>
				<label className='flex flex-col'>
					Message
					<textarea
						{...register('message', { required: 'Message is required' })}
						name='message'
						className={
							!errors.message
								? 'border focus:outline-none border-[#0C7D69]/50 rounded-sm p-2 w-full mt-2 max-h-[400px] min-h-[100px]'
								: 'border focus:outline-none border-[#F44336]/50 rounded-sm p-2 w-full mt-2 max-h-[400px] min-h-[100px]'
						}
					/>
				</label>
				{errors.message && (
					<span className='text-red-400'>This field is required</span>
				)}
				<div>
					<label className='mb-5 mt-5 inline-block min-w-max'>
						<input
							{...register('terms', { required: true })}
							className='mr-3 p-4'
							name='terms'
							type='checkbox'
						/>
						I accept privacy terms.
					</label>
					{errors.terms && (
						<span className='text-red-400 ml-3'>This checkbox is required</span>
					)}
				</div>
				<button
					type='submit'
					className='border rounded-sm p-2 w-full mt-2 cursor-pointer bg-[#0C7D69] text-[#D4FFFD] font-bold'
				>
					Submit
				</button>
			</form>
		</div>
	)
}
