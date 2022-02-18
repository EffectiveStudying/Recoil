import React, { ReactElement } from 'react';
import cx from 'classnames';
import Link from 'next/link';

export type PaginationProps = {
    currentPage: number;
    totalCount: number;
    size?: number;
    href: string;
};

export function Pagination({
    currentPage,
    totalCount,
    size = 10,
    href,
}: PaginationProps): ReactElement {
    const totalPage = Math.ceil(totalCount / size);
    const pageStart = Math.max(Math.min(currentPage - 4, totalPage - 9), 1) || 1;
    const pageCount = (pageStart + 10 > totalPage ? totalPage - pageStart + 1 : 10) || 1;

    const pageList = Array.apply(0, Array(pageCount)).map((_, index) => index + pageStart);
    return (
        <nav>
            <ul className="pagination">
                {pageList.map((page) => (
                    <li
                        className={cx('page-item', { active: page === currentPage })}
                        key={`page-list-${page}`}
                    >
                        <Link href={`${href}page=${page}`}>
                            <a className="page-link">{page}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
