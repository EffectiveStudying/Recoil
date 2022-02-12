import Link from 'next/link';
import React, { ReactElement } from 'react';

export type TagsProps = {
    list: string[];
};

function Tags({ list }: TagsProps): ReactElement {
    return (
        <div className="sidebar">
            <p>Popular Tags</p>

            <div className="tag-list">
                {list.map((tag) => (
                    <Tag key={`tag-item-${tag}`}>{tag}</Tag>
                ))}
            </div>
        </div>
    );
}

type TagProps = {
    children: string;
};

function Tag({ children }: TagProps): ReactElement {
    return (
        <Link href={`/?tag=${children}`}>
            <a className="tag-pill tag-default">{children}</a>
        </Link>
    );
}

export default Tags;
