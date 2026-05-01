import { getUser, loginUser, registerUser } from "../services/auth.service.js";


export const register = async (req, res) => {
  try {
    const data = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data
    });

  } catch (err) {
    if (err.message === "User already exists") {
      return res.status(409).json({
        success: false,
        message: err.message
      });
    }

    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUser(req.body);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data
    });

  } catch (err) {
    if (err.message === "User not found") {
      return res.status(404).json({
        success: false,
        message: err.message
      });
    }

    if (err.message === "Wrong password") {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await getUser(req.user.id);


    // const { password: _, ...userData } = user.toJSON();
    res.status(200).json({
      success: true,
      data: user
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user"
    });
  }
};