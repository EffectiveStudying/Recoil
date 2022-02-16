import React, { ReactElement } from 'react';
import { Article } from 'types';
import { format } from 'date-fns';
import Link from 'next/link';

export type ArticleProps = Pick<
    Article,
    'author' | 'favoritesCount' | 'createdAt' | 'description' | 'title' | 'slug'
>;

function ArticlePreview({
    slug,
    author,
    favoritesCount,
    title,
    description,
    createdAt,
}: ArticleProps): ReactElement {
    return (
        <div className="article-preview">
            <div className="article-meta">
                <Link href={`/profile/${author.username}`}>
                    <a>
                        <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                    </a>
                </Link>
                <div className="info">
                    <Link href={`/profile/${author.username}`}>
                        <a className="author">{author.username}</a>
                    </Link>
                    <span className="date">{format(new Date(createdAt), 'MMMM do')}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart" />
                    &nbsp;{favoritesCount}
                </button>
            </div>
            <Link href={`/article/${slug}`}>
                <a className="preview-link">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <span>Read more...</span>
                </a>
            </Link>
        </div>
    );
}

export default ArticlePreview;
