const cognito = require('../config/awsConfig');

const loginUser = async (email, password) => {
    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.COGNITO_CLIENT_ID,
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        }
    };

    try {
        const data = await cognito.initiateAuth(params).promise();
        return data.AuthenticationResult;
    } catch (error) {
        throw new Error('Authentication failed');
    }
};

module.exports = { loginUser };
