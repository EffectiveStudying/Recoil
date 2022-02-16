import Pagination from 'components/Pagination';
import { useRouter } from 'next/router';
import React, { ReactElement, useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { $listArticles } from 'stores/article.store';
import ArticlePreview from './ArticlePreview';

function ArticlePreviewList(): ReactElement {
    const router = useRouter();
    const { page = 1, tag = '' } = router.query;
    const listArticlesLoadable = useRecoilValueLoadable(
        $listArticles({ page: Number(page), tag: String(tag) })
    );
    const paginationHref = useMemo(() => {
        if (tag) {
            return `/?tag=${tag}&`;
        }
        return `/?`;
    }, [tag]);
    if (listArticlesLoadable.state === 'loading') {
        return <div>loading...</div>;
    } else if (listArticlesLoadable.state === 'hasError') {
        return <div>error</div>;
    }
    const { articlesCount, articles } = listArticlesLoadable.contents;
    return (
        <>
            {articles.map((article) => (
                <ArticlePreview key={article.slug} {...article} />
            ))}
            <Pagination
                href={paginationHref}
                currentPage={Number(page)}
                totalCount={articlesCount}
            />
        </>
    );
}

export default ArticlePreviewList;
