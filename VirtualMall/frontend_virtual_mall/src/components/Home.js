import React, { useState } from 'react';
import './Home.css';
import { GoogleLogout } from 'react-google-login';
import { refreshTokenSetup } from './login/refreshToken';

const clientId =
    '668942565774-3nfc2tln114ltf36jd73iq347ii2nmdp.apps.googleusercontent.com';

const Home = (props) => {

    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onSignoutSuccess = () => {
        alert("You have been signed out successfully");
        window.location.href = "/login";
        setShowLogoutButton(false);
    }

    return (
        <>
            <div className="home_page">
                <div>
                    <h1>Welcome To Virtual Mall</h1>

                    <div>
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Logout with Google"
                            onLogoutSuccess={onSignoutSuccess}
                            className="button"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}
export default Home