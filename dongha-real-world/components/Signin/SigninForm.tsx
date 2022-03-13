import { signin, UserError } from 'lib/api/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { MouseEventHandler, ReactElement, useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { $user } from 'stores/user.store';

export function SigninForm(): ReactElement {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleChangeEmail = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        ({ target: { value } }) => {
            setEmail(value);
        },
        []
    );
    const handleChangePassword = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        ({ target: { value } }) => {
            setPassword(value);
        },
        []
    );
    const [errors, setErrors] = useState<null | UserError>(null);
    const setUser = useSetRecoilState($user);
    const router = useRouter();
    const hadnleSignIn = useCallback<MouseEventHandler<HTMLButtonElement>>(
        async (e) => {
            e.preventDefault();
            setErrors(null);
            const response = await signin({ email, password });
            if ('errors' in response) {
                setErrors(response.errors);
            } else {
                localStorage.setItem('token', response.token);
                setUser(response);
                router.push('/');
            }
        },
        [email, password]
    );

    return (
        <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
                <Link href="/signup">
                    <a>Need an account?</a>
                </Link>
            </p>

            {errors && (
                <ul className="error-messages">
                    {errors.email?.map((text) => (
                        <li>Email {text}</li>
                    ))}
                    {errors.password?.map((text) => (
                        <li>Password {text}</li>
                    ))}
                </ul>
            )}

            <form>
                <fieldset className="form-group">
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        onChange={handleChangePassword}
                    />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={hadnleSignIn}>
                    Sign in
                </button>
            </form>
        </div>
    );
}
