import User from "../models/User.js";

async function accountExistsSignIn(req, res, next) {
  const user = await User.findOne({ mail: req.body.mail });
  if (user) {
    req.user = {
      id: user._id,
      mail: user.mail,
      photo: user.photo,
      password: user.password,
      is_admin: user.is_admin,
      is_verified: user.is_verified,
    };
    return next();
  }
  return res.status(400).json({
    success: false,
    message: "User not found, check that it is registered and verified",
  });
}

export default accountExistsSignIn;
