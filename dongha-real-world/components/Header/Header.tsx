import React, { ReactElement } from 'react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { $user } from 'stores/user.store';
import { SignedNav } from 'components/Header';
import cx from 'classnames';
import { useRouter } from 'next/router';

export function Header(): ReactElement {
    const signedUser = useRecoilValue($user);
    const router = useRouter();
    if (signedUser) {
        return <SignedNav user={signedUser} />;
    }

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">conduit</a>
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link href="/">
                            <a className={cx('nav-link', { active: router.pathname === '/' })}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/signin">
                            <a
                                className={cx('nav-link', {
                                    active: router.pathname === '/signin',
                                })}
                            >
                                Sign in
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/signup">
                            <a
                                className={cx('nav-link', {
                                    active: router.pathname === '/signup',
                                })}
                            >
                                Sign up
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
