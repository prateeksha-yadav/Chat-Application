import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// -------------------- SIGNUP --------------------
export const signup = async (req, res) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body;

		// 1. Validate passwords match
		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords do not match." });
		}

		// 2. Check if username already exists
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ error: "Username already taken." });
		}

		// 3. Hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// 4. Generate avatar
		const profilePic =
			gender === "male"
				? `https://avatar.iran.liara.run/public/boy?username=${username}`
				: `https://avatar.iran.liara.run/public/girl?username=${username}`;

		// 5. Create and save new user
		const newUser = new User({
			fullName,
			username,
			password: hashedPassword,
			gender,
			profilePic,
		});

		await newUser.save();

		// 6. Set JWT token in cookie
		generateTokenAndSetCookie(newUser._id, res);

		// 7. Send response
		res.status(201).json({
			_id: newUser._id,
			fullName: newUser.fullName,
			username: newUser.username,
			profilePic: newUser.profilePic,
		});
	} catch (error) {
		console.error("Signup Error:", error.message);
		res.status(500).json({ error: "Server error during signup." });
	}
};

// -------------------- LOGIN --------------------
export const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		// 1. Check if user exists
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({ error: "Invalid username or password." });
		}

		// 2. Check password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ error: "Invalid username or password." });
		}

		// 3. Set JWT cookie
		generateTokenAndSetCookie(user._id, res);

		// 4. Send response
		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.error("Login Error:", error.message);
		res.status(500).json({ error: "Server error during login." });
	}
};

// -------------------- LOGOUT --------------------
export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
		res.status(200).json({ message: "Logged out successfully." });
	} catch (error) {
		console.error("Logout Error:", error.message);
		res.status(500).json({ error: "Server error during logout." });
	}
};
