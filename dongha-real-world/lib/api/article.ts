import { Article } from 'types';
import { instance } from './api';

export type readArticleListRequest = {
    page: number;
    tag?: string;
    pageSize?: number;
};

export type readArticleListResponse = Article[];

export const readArticleList = async ({
    page,
    tag,
    pageSize = 20,
}: readArticleListRequest): Promise<readArticleListResponse> => {
    const params = {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        tag,
    };
    if (!tag) {
        delete params.tag;
    }
    const result = await instance.get('/articles', {
        params,
    });

    return result.data.articles;
};
