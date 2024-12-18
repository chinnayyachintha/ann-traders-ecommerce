const { loginUser } = require('../services/authService');

const authenticate = async (req, res) => {
    const { email, password } = req.body;

    try {
        const authResult = await loginUser(email, password);
        res.status(200).json(authResult);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { authenticate };
