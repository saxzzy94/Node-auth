import axios from "axios";
export const loadUser = () => async (dispatch) => {
	try {
		const res = await axios.get("localhost:5000/users/load-user");
		dispatch({
			type: "LOAD_USER",
			payload: res.data.user,
		});
	} catch (error) {
		dispatch({
			type: "ERROR",
		});
	}
};

export const signup = () => async (dispatch) => {
	try {
		const res = await axios.get("localhost:5000/users/load-user");
		dispatch({
			type: "SIGN_UP",
			payload: res.data.user,
		});
	} catch (error) {
		dispatch({
			type: "ERROR",
		});
	}
};

export const signin = () => async (dispatch) => {
	try {
		const res = await axios.get("localhost:5000/users/login");
		dispatch({
			type: "SIGN_IN",
			payload: res.data.body.data.response.accessToken,
		});
	} catch (error) {}
};
