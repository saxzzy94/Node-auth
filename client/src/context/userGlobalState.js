import React, { createContext, useReducer } from "react";
import AppReducer from "./userAppReducer";
import axios from "axios";
//Initial State

const initialState = {
	user: {},
	isAuthenticated: false,
	msg: "",
	token: null,
	error: false,
};
//Create Context
export const GlobalContext = createContext();

//provider componenet
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	const loadUser = async () => {
		try {
			axios.defaults.withCredentials = true;
			const token = localStorage.getItem("x-login-token");
			const config = {
				headers: {
					Authorization: token,
				},
			};
			const res = await axios.get(
				"http://localhost:5000/users/load-user",
				config
			);
			dispatch({
				type: "LOAD_USER",
				payload: res.data.user,
			});
		} catch (error) {
			dispatch({
				type: "ERROR",
				payload: error.response?.data.message,
			});
		}
	};

	const signup = async (formData) => {
		try {
			const res = await axios.post(
				"http://localhost:5000/users/register",
				formData
			);
			dispatch({
				type: "SIGN_UP",
				payload: res.data.body.status,
			});
		} catch (error) {
			dispatch({
				type: "ERROR",
				payload: error.response?.data.message,
			});
		}
	};

	const signin = async (formData) => {
		try {
			const res = await axios.post(
				"http://localhost:5000/users/login",
				formData
			);
			console.log(res.data);
			dispatch({
				type: "SIGN_IN",
				payload: res.data.body.data.response.accessToken,
			});
			dispatch(loadUser());
		} catch (error) {
			console.error(error);
			dispatch({
				type: "ERROR",
				payload: error.response?.data.message,
			});
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				loading: state.loading,
				isAuthenticated: state.isAuthenticated,
				error: state.error,
				msg: state.msg,
				user: state.user,
				loadUser,
				signup,
				signin,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
