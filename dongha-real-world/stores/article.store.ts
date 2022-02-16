import { readArticleList, readArticleListRequest } from 'lib/api/article';
import { selectorFamily } from 'recoil';

export const $listArticles = selectorFamily({
    key: 'listArticles',
    get:
        ({ page, tag, pageSize = 10 }: readArticleListRequest) =>
        async () => {
            const result = await readArticleList({ page, tag, pageSize });
            return result;
        },
});
