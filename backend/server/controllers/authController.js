const registerUser = async (req, res) => {
   try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpiresAt,
    });

    // send OTP email
    await sendEmail(email, otp);

    res.status(201).json({ message: "Registration successful, check your email for OTP" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const verifyOTP = async (req, res) => {};
const loginUser = async (req, res) => {};

module.exports = { registerUser, verifyOTP, loginUser };
