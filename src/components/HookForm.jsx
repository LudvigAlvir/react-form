import { useForm } from "react-hook-form";

export function HookForm() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	console.log(errors);
	return (
		<form
			action=""
			onSubmit={handleSubmit((data) => console.log(data))}>
			<input
				type="text"
				className={errors.author && "error"}
				{...register("author", { required: "Author is required" })}
			/>
			<p>{errors.author?.message}</p>

			<input
				className={errors.title && "error"}
				type="text"
				{...register("title", {
					required: "Title is required",
					minLength: {
						value: 3,
						message: "Title must be more than 3 characters",
					},
				})}
			/>

			<p>{errors.title?.message}</p>
			<input
				type="text"
				className={errors.content && "error"}
				{...register("content", {
					required: "Content is required",
					minLength: {
						value: 5,
						message: "Must be 5 characters or more",
					},
				})}
			/>
			<p>{errors.content?.message}</p>
			<button type="submit">Submit</button>
		</form>
	);
}
