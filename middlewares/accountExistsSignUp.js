import User from "../models/User.js";

async function accountExistsSignUp(req, res, next) {
  const user = await User.findOne({ mail: req.body.mail });
  if (user) {
    return res.status(400).json({
      success: false,
      message: "User already created",
    });
  }
  return next();
}

export default accountExistsSignUp;
