import { createUser, UserError } from 'lib/api/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {
    MouseEventHandler,
    ReactElement,
    ReactEventHandler,
    useCallback,
    useState,
} from 'react';
import { useSetRecoilState } from 'recoil';
import { $user } from 'stores/user.store';

export function SignupForm(): ReactElement {
    const [username, setUsername] = useState<string>('');
    const handleChangeUsername = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        ({ target: { value } }) => {
            setUsername(value);
        },
        []
    );
    const [email, setEmail] = useState<string>('');
    const handleChangeEmail = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        ({ target: { value } }) => {
            setEmail(value);
        },
        []
    );
    const [password, setPassword] = useState<string>('');
    const handleChangePassword = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        ({ target: { value } }) => {
            setPassword(value);
        },
        []
    );
    const [errors, setErrors] = useState<null | UserError>(null);
    const setUser = useSetRecoilState($user);
    const router = useRouter();
    const hadnleSignUp = useCallback<MouseEventHandler<HTMLButtonElement>>(
        async (e) => {
            e.preventDefault();
            setErrors(null);
            const response = await createUser({ username, email, password });
            if ('errors' in response) {
                setErrors(response.errors);
            } else {
                localStorage.setItem('token', response.token);
                setUser(response);
                router.push('/');
            }
        },
        [username, email, password]
    );
    return (
        <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
                <Link href="/signin">
                    <a>Have an account?</a>
                </Link>
            </p>
            {errors && (
                <ul className="error-messages">
                    {errors.username?.map((text) => (
                        <li>Username {text}</li>
                    ))}
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
                        placeholder="Your Name"
                        value={username}
                        onChange={handleChangeUsername}
                    />
                </fieldset>
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
                        value={password}
                        onChange={handleChangePassword}
                    />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={hadnleSignUp}>
                    Sign up
                </button>
            </form>
        </div>
    );
}
