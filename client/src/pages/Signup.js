import React, { useContext, useState } from "react";
import InputField from "../components/InputField";
import { GlobalContext } from "../context/userGlobalState";
import validateForm from "../util/validate";

const Signup = () => {
	const { signup, msg } = useContext(GlobalContext);
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		password: "",
		phoneNumber: "",
	});
	const [error, setError] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		let { errors } = validateForm(formData);
		if (Object.keys(errors).length > 0) {
			setError(errors);
			setFormData({
				email: "",
				name: "",
				password: "",
				phoneNumber: "",
			});
			return;
		}

		await signup(formData);
		alert(msg);
	};
	return (
		<div className="__container">
			<h1>Sign up</h1>
			<div className="container">
				<form className="form" onSubmit={handleSubmit}>
					<InputField
						placeholder={"John Doe"}
						name={"name"}
						value={formData.name}
						type={"text"}
						setFormData={(e) =>
							setFormData({ ...formData, [e.target.name]: e.target.value })
						}
						errors={error}
					/>

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

					<InputField
						placeholder={"07012345678"}
						name={"phoneNumber"}
						value={formData.phoneNumber}
						type={"tel"}
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

export default Signup;
