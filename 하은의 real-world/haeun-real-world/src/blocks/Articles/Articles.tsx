import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import axios from "axios";
import { selector } from "recoil";
import { Article, ArticleType } from "./Article";
import { $currentAuthorState, $currentFavoritedState, $currentPageNumState, $currentTagState, $limitState, $totalCountState } from "../../atoms";

export const articleListSelector = selector<ArticleType>({
    key: 'articleListSelector',
    get: async({ get }) => {
        const selectedTag = get($currentTagState);
        const selecteAuthor = get($currentAuthorState);
        const selectedFavorite = get($currentFavoritedState);
        const selectedLimit = get($limitState);
        const selectedOffset = selectedLimit * get($currentPageNumState);

        try{
            const response = await axios.get(
                `https://conduit.productionready.io/api/articles`,
                { params: { tag: selectedTag, author: selecteAuthor, favorited: selectedFavorite, limit: selectedLimit, offset: selectedOffset }}
            );

            return response.data;
        }catch (e) {
            return {tags:[]};
        }
    }
});

export const Articles = () => {
    const articles = useRecoilValueLoadable(articleListSelector);
    const setTotalCount = useSetRecoilState($totalCountState);

    setTotalCount(articles.contents.articlesCount);

    switch (articles.state){
        case 'hasValue':
            if(articles.contents.articlesCount === 0){
                return <div>No articles are here... yet</div>
            }
            const articleList = articles.contents.articles?.map((article) => (
                    <Article article={article} />
                ));
            return (
                <div>{articleList}</div>
            );

        case 'loading':
            return <div>Loading articles...</div>
        case 'hasError':
            throw articles.contents
    }    
}