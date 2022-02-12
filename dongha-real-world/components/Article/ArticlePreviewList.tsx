import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { $listArticles } from 'stores/article.store';
import ArticlePreview from './Article';

function ArticlePreviewList(): ReactElement {
    const router = useRouter();
    const { page = 1, tag = '' } = router.query;
    const listArticlesLoadable = useRecoilValueLoadable(
        $listArticles({ page: Number(page), tag: String(tag) })
    );
    if (listArticlesLoadable.state === 'loading') {
        return <div>loading...</div>;
    } else if (listArticlesLoadable.state === 'hasError') {
        return <div>error</div>;
    }
    const listArticles = listArticlesLoadable.contents;

    return (
        <>
            {listArticles.map((article) => (
                <ArticlePreview key={article.slug} {...article} />
            ))}
        </>
    );
}

export default ArticlePreviewList;
