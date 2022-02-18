import React, { ReactElement } from 'react';
import Link from 'next/link';
import { User } from 'types';

export type SignedNavProps = {
    user: User;
};

export function SignedNav({ user: { username } }: SignedNavProps): ReactElement {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">conduit</a>
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">
                                <i className="ion-compose" />
                                &nbsp;New Article
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">
                                <i className="ion-gear-a" />
                                &nbsp;Settings
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
