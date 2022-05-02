import axios from "axios";
import React, { useContext, useState } from "react";
import Alert from "../components/Alert";
import { GlobalContext } from "../context/userGlobalState";

const Dashboard = () => {
	const { user, loadUser } = useContext(GlobalContext);
	const [fileInputState, setFileInputState] = useState("");
	const [previewSource, setPreviewSource] = useState("");
	const [selectedFile, setSelectedFile] = useState();
	const [successMsg, setSuccessMsg] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
		setSelectedFile(file);
		setFileInputState(e.target.value);
	};
	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	const token = localStorage.getItem("x-login-token");
	const handleSubmitFile = (e) => {
		e.preventDefault();
		if (!selectedFile) return;
		const reader = new FileReader();
		reader.readAsDataURL(selectedFile);
		reader.onloadend = () => {
			uploadImage(reader.result);
		};
		reader.onerror = () => {
			console.error("AHHHHHHHH!!");
			setErrMsg("something went wrong!");
		};
	};

	const uploadImage = async (base64EncodedImage) => {
		try {
			const res = await axios.post(
				"http://localhost:5000/users/upload",

				JSON.stringify({ data: base64EncodedImage }),

				{
					headers: { "Content-Type": "application/json", Authorization: token },
				}
			);

			setFileInputState("");
			setPreviewSource("");
			loadUser();
			setSuccessMsg(res.data.msg || "Image uploaded successfully");
		} catch (err) {
			err.response
				? setErrMsg(err.response.message)
				: setErrMsg("Something went wrong!");
		}
	};
	return (
		<div className=" __container">
			<div class="card profile">
				<div class="card__heading profile__heading">
					<img
						src={user.profile_image || "https://via.placeholder.com/100"}
						alt="Avatar"
					/>
				</div>
				<h3 className="title">Upload an Image</h3>
				<Alert msg={errMsg} type="danger" />
				<Alert msg={successMsg} type="success" />
				<form onSubmit={handleSubmitFile} className="form">
					<input
						id="fileInput"
						type="file"
						name="image"
						onChange={handleFileInputChange}
						value={fileInputState}
						className="form-input"
					/>
					<button className="btn btn-primary" type="submit">
						Submit
					</button>
				</form>
				{/* {previewSource && (
					<img src={previewSource} alt="chosen" style={{ height: "300px" }} />
				)} */}
			</div>
			<div class="card user-details">
				<h3 class="user__heading">Profile</h3>
				<p class="user__name">
					Full Name <span class="user__detail">{user.full_name}</span>
				</p>
				<p class="user__email">
					Eamil <span class="user__detail">{user.email}</span>
				</p>
				<p class="user__dob">
					Phone No <span class="user__detail">{user.phone_number}</span>
				</p>
			</div>
		</div>
	);
	// return (
	// 	<div className="__container">
	// 		<div className={"img-styles"}>

	// 			<img
	// 		/div>

	// 		<div>
	// 			<div>Darlene Jenkins</div>
	// 			<div>darlene.jenkins@examplecom</div>
	// 		</div>		src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
	// 				alt=""
	// 			/>
	// 		<
	// 	</div>
	// );
};

export default Dashboard;
