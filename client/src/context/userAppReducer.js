// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case "LOAD_USER":
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case "SIGN_IN":
			localStorage.setItem("x-login-token", action.payload);
			return {
				...state,
				token: action.payload,
			};
            case "SIGN_UP":
			return {
				...state,
				msg: action.payload,
			};
		case "ERROR":
			return {
				...state,
				isAuthenticated: false,
                msg: action.payload,
				token: null,
				user: null,
			};

		default:
			return state;
	}
};
