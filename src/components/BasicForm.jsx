import { useState } from "react";
export function BasicForm() {
	const [errors, setErrors] = useState({
		author: "",
		title: "",
		content: "",
	});

	function submit(e) {
		e.preventDefault();
		const errors = {
			author: "",
			title: "",
			content: "",
		};
		const valid = {
			author: "",
			title: "",
			content: "",
		};

		const { author, title, content } = e.target;

		if (author.value.length < 1) {
			errors.author = "Required";
		}
		if (title.value.length < 3) {
			errors.title = "Title must be more than 3 characters";
		}
		if (content.value.length < 5) {
			errors.content = "Content must be more than 5 characters";
		}

		setErrors(errors);
		if (errors.author || errors.title || errors.content) {
			console.log("error");
		} else {
			console.log("submit");
		}
	}

	return (
		<form
			action=""
			onSubmit={submit}>
			<label htmlFor="author">author</label>
			<input
				name="author"
				type="text"
			/>
			{errors.author && <p>{errors.author}</p>}
			<label htmlFor="title">title</label>
			<input
				name="title"
				type="text"
			/>
			{errors.title && <p>{errors.title}</p>}
			<label htmlFor="title">content</label>
			<input
				name="content"
				type="text"
			/>
			{errors.content && <p>{errors.content}</p>}
			<button type="submit">Submit</button>
		</form>
	);
}
