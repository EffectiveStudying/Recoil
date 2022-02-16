import React, { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

function FeedList(): ReactElement {
    const router = useRouter();
    const { tag } = router.query;
    return (
        <ul className="nav nav-pills outline-active">
            {/* <li className="nav-item">
      <a className="nav-link disabled" href="">
          Your Feed
      </a>
  </li> */}
            <li className="nav-item">
                <Link href="/">
                    <a className={cx('nav-link', { active: !tag })}>Global Feed</a>
                </Link>
            </li>
            {tag && (
                <li className="nav-item">
                    <Link href={`/?tag=${tag}`}>
                        <a className="nav-link active">#{String(tag)}</a>
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default FeedList;
