import "./App.css";
import Navbar from "./components/Navbar";
import { GlobalContext, GlobalProvider } from "./context/userGlobalState";
import Signup from "./pages/Signup";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { useContext, useEffect } from "react";

function App() {
	const { loadUser, isAuthenticated } = useContext(GlobalContext);
	useEffect(() => {
		const loadState = async () => {
			await loadUser();
		};
		loadState();
	}, []);
	console.log(isAuthenticated);
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Signup />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/signin" element={<Login />} />
				<Route
					path="/dashboard"
					element={<PrivateRoute component={Dashboard} />}
				/>
				<Route path="*" render={() => <Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

export default App;
