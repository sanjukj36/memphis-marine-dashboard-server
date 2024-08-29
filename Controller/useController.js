const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register

// exports.register = async (req, res) => {
//   try {
//       const { f_userName, f_Pwd, userType } = req.body;

//       if (!f_userName || !f_Pwd) {
//           return res.status(400).json({ error: "Username and password are required" });
//       }

//       const existingUser = await User.findOne({ f_userName });
//       if (existingUser) {
//           return res.status(400).json({ error: "Username Already Exists!" });
//       }

//       const salt = await bcrypt.genSalt(10);
//       const hashedPwd = await bcrypt.hash(f_Pwd, salt);

//       const newUser = new User({
//           f_userName,
//           f_Pwd: hashedPwd,
//           userType
//       });

//       await newUser.save();
//       const token = jwt.sign({ id: newUser._id, userType: newUser.userType }, "your_jwt_secret", { expiresIn: "1h" });

//       res.status(200).json({ token });
//   } catch (err) {
//       console.error('Register Error:', err.message);  // Log detailed error
//       res.status(500).json({ error: "Internal Server Error" });
//   }
// };
exports.register = async (req, res) => {
  try {
      const { f_userName, f_Pwd, userType } = req.body;

      if (!f_userName || !f_Pwd) {
          return res.status(400).json({ error: "Username and password are required" });
      }

      const existingUser = await User.findOne({ f_userName });
      if (existingUser) {
          return res.status(400).json({ error: "Username Already Exists!" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPwd = await bcrypt.hash(f_Pwd, salt);

      const newUser = new User({
          f_userName,
          f_Pwd: hashedPwd,
          userType
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id, userType: newUser.userType }, "your_jwt_secret", { expiresIn: "1h" });

      res.status(200).json({ token, userType: newUser.userType });  // Include userType in the response
  } catch (err) {
      console.error('Register Error:', err.message);  
      res.status(500).json({ error: "Internal Server Error" });
  }
};



// Login
exports.login = async (req, res) => {
  try {
      const { f_userName, f_Pwd } = req.body;

      if (!f_userName || !f_Pwd) {
          return res.status(400).json({ error: "Username and password are required" });
      }

      const user = await User.findOne({ f_userName });
      console.log(user);
      
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      const isMatch = await bcrypt.compare(f_Pwd, user.f_Pwd);
      if (!isMatch) {
          return res.status(400).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user._id, userType: user.userType }, "your_jwt_secret", { expiresIn: "1h" });

      res.status(200).json({ token, userType: user.userType });  // Include userType in the response
  } catch (err) {
      console.error('Login Error:', err.message);  
      res.status(500).json({ error: "Internal Server Error" });
  }
};

// get User
exports.getUsers = async (req, res) => {
  try {
      const users = await User.find({}, 'f_userName userType'); // Only select the fields you need
      res.status(200).json({ users, count: users.length });
  } catch (err) {
      console.error('Get Users Error:', err.message);  
      res.status(500).json({ error: "Internal Server Error" });
  }
};