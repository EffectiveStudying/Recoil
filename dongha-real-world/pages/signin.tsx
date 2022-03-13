import { SigninForm } from 'components/Signin';
import React, { ReactElement } from 'react';

function Signin(): ReactElement {
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <SigninForm />
                </div>
            </div>
        </div>
    );
}

export default Signin;
