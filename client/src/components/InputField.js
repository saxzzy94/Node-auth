import React, { Fragment } from "react";
import { FaExclamationCircle, FaCheck } from "react-icons/fa";
const InputField = ({
	placeholder,
	name,
	pattern,
	value,
	type,
	setFormData,
	errors,
}) => {
	const handleChange = (e) => {
		setFormData(e);
	};

	return (
		<Fragment>
			<div className="form-group form-group--button-inside">
				<input
					className={errors && errors[name] && "input--error"}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={handleChange}
				/>
				<button className="success-btn">
					<FaCheck />
				</button>
				{errors && errors[name] && (
					<>
						<button className="error-btn">
							<FaExclamationCircle />
						</button>
						<div className="error-text">{errors[name]}</div>
					</>
				)}
			</div>
		</Fragment>
	);
};

export default InputField;
