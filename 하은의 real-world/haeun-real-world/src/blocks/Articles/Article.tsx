import { ISOtoDate } from "../Calculations/DateConversion";
import { ArticleTags } from "./ArticleTags";

export const Article = ({article}) => {
    const imgSrc = article.author.image;
    
    return (
        <div className="article-preview">
            <div className="article-meta">
                <a href="profile.html"><img src={imgSrc} /></a> {/* Todo : profile link */}
                <div className="info">
                    <a href="" className="author">{article.author.username}</a> {/* Todo : username link */}
                    <span className="date">{ISOtoDate(article.createdAt)}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {article.favoritesCount}
                </button>
            </div>
            <a href="" className="preview-link"> {/* Todo : preview link */}
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ArticleTags tagList={article.tagList} />
            </a>
        </div>
    );
}