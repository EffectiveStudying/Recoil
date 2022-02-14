import { useRecoilValueLoadable } from "recoil";
import axios from "axios";
import { selector } from "recoil";
import { Article, ArticleType } from "./Article";
import { $currentAuthorState, $currentFavoritedState, $currentPageNumState, $currentTagState, $limitState } from "../../atoms";
import { Pagination } from "./Pagination";

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
    const [state, articlesCount, articleList] = [articles.state, articles.contents.articlesCount, articles.contents.articles];

    switch (state){
        case 'hasValue':
            if(articlesCount === 0){
                return <div>No articles are here... yet</div>
            }
            return (
                <div>
                    {
                        articleList?.map((article) => (
                            <Article key={article.slug} article={article} />
                        ))
                    }
                    <Pagination totalCount={articlesCount}/>
                </div>
            );

        case 'loading':
            return <div>Loading articles...</div>
        case 'hasError':
            throw articles.contents
    }    
}