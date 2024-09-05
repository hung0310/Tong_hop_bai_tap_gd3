import axios from 'axios';
import { useState } from 'react';

const PostSignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://47.129.231.55/auth/register/', {
                username: username,
                password: password,
                email: email
            });

            if (response.status === 201) {
                setResponseMessage("Account created successfully. Tokens: " + JSON.stringify(response.data.tokens));
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setResponseMessage("Account creation failed or server error.");
            } else {
                setResponseMessage("An error occurred: " + error.message);
            }
        }
    };

    return (
        <div>Hello
        <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Register</button>
            <p>{responseMessage}</p>
        </form>
        </div>
    );
};

export default PostSignIn;