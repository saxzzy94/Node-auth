import React, { useContext, useState } from "react";
import InputField from "../components/InputField";
import { GlobalContext } from "../context/userGlobalState";
import validateForm from "../util/validate";

const Signin = () => {
	const { signin } = useContext(GlobalContext);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
        console.log(formData);
		let { errors } = validateForm(formData);
        console.log(errors);
		if (errors.email || errors.password) {
			setError(errors);
			setFormData({
				email: "",
				password: "",
			});
			return;
		}
		await signin(formData);
	};
	return (
		<div className="__container">
			<h1>Sign in</h1>
			<div className="container">
				<form className="form" onSubmit={handleSubmit}>
					<InputField
						placeholder={"johndoe@example.com"}
						name={"email"}
						value={formData.email}
						type={"email"}
						setFormData={(e) =>
							setFormData({ ...formData, [e.target.name]: e.target.value })
						}
						errors={error}
					/>
					<div className="form-group signup-form-group--button-inside">
						<InputField
							placeholder={"password"}
							name={"password"}
							value={formData.password}
							type={"password"}
							setFormData={(e) =>
								setFormData({ ...formData, [e.target.name]: e.target.value })
							}
							errors={error}
						/>
					</div>
					<button className="btn btn-primary flow" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signin;
