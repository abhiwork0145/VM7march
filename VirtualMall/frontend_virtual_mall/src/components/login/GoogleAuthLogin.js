import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FacebookLogin from 'react-facebook-login';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './refreshToken';
import Home from '../Home';

const clientId =
    '668942565774-3nfc2tln114ltf36jd73iq347ii2nmdp.apps.googleusercontent.com';

function Login() {

    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);



    const googleLogin = async (accesstoken) => {
        let res = await axios.post(
            "http://localhost:8000/rest-auth/google/",
            {
                access_token: accesstoken,
            }
        );
        console.log(res);
        return await res.status;
    };


    const onLoginSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        refreshTokenSetup(res);
        setShowLoginButton(false);
        window.location.href = "/home";
        setShowLogoutButton(true);

    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
    };

    const onSignoutSuccess = () => {
        alert("You have been signed out successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }

    // for Facebook

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <div>

            {showLoginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={googleLogin, onLoginSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={true}
                /> : null
            }

            {showLogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout with Google"
                    onLogoutSuccess={onSignoutSuccess}
                /> : null
            }

            
        </div>
    );
}

export default Login;