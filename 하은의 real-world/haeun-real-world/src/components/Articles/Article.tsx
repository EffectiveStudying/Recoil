import { format } from "date-fns";
import Link from "next/link";
import { ArticleTags } from "./ArticleTags";

export const Article = ({article: {author, createdAt, favoritesCount, title, description, tagList}}) => {
    const imgSrc = author.image;
    
    return (
        <div className="article-preview">
            <div className="article-meta">
                <Link href={"profile.html"}><a><img src={imgSrc} /></a></Link> {/* Todo : profile link */}
                <div className="info">
                    <Link href={""}><a className="author">{author.username}</a></Link> {/* Todo : username link */}
                    <span className="date">{format(new Date(createdAt), 'MMMM dd, yyyy')}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {favoritesCount}
                </button>
            </div>
            <Link href={""}><a className="preview-link"> {/* Todo : preview link */}
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Read more...</span>
                <ArticleTags tagList={tagList} />
            </a></Link>
        </div>
    );
}