import { SignupForm } from 'components/Signup';
import React, { ReactElement } from 'react';

function Signup(): ReactElement {
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}

export default Signup;
