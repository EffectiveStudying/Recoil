import { useRecoilValueLoadable } from "recoil";
import axios from "axios";
import { selector } from "recoil";
import { Article } from "./Article";


export const articleListSelector = selector({
    key: 'articleListSelector',
    get: async() => {
        try{
            const response = await axios.get(
                `https://conduit.productionready.io/api/articles`
            );
            return response.data;
        }catch (e) {
            return {tags:[]};
        }
    }
});

export const Articles = () => {
    const articles = useRecoilValueLoadable(articleListSelector);
    
    switch (articles.state){
        case 'hasValue':
            return articles.contents.articles.map((article) => (
                <Article article={article} />
            ));
        case 'loading':
            return <div>Loading articles...</div>
        case 'hasError':
            throw articles.contents
    }    
}