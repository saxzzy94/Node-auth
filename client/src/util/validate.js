export default function validateForm(formData) {
	let fields = formData;
	let errors = {};
	let formIsValid = true;

	if (!fields["name"]) {
		formIsValid = false;
		errors["name"] = "*Please enter a name.";
	}

	if (typeof fields["name"] !== "undefined") {
		if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
			formIsValid = false;
			errors["name"] = "*Please enter alphabet characters only.";
		}
	}

	if (!fields["email"]) {
		formIsValid = false;
		errors["email"] = "*Please enter your email";
	}

	if (typeof fields["email"] !== "undefined") {
		//regular expression for email validation
		var pattern = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
		);
		if (!pattern.test(fields["email"])) {
			formIsValid = false;
			errors["email"] = "*Please enter valid email.";
		}
	}

	if (!fields["phoneNumber"]) {
		formIsValid = false;
		errors["phoneNumber"] = "*Please enter your phone no.";
	}

	if (typeof fields["phoneNumber"] !== "undefined") {
		if (!fields["phoneNumber"].match(/^(\+234|[0]?)\d{10,11}$/)) {
			formIsValid = false;
			errors["phoneNumber"] = "*Please enter valid phone no.";
		}
	}

	if (!fields["password"]) {
		formIsValid = false;
		errors["password"] = "*Please enter your password.";
	}

	if (typeof fields["password"] !== "undefined") {
		if (
			!fields["password"].match(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/
			)
		) {
			formIsValid = false;
			errors["password"] =
				"*Password must be a minimum of 12 characters long with one uppercase letter and one special character.";
		}
	}
	return {
		errors,
		formIsValid,
	};
}
