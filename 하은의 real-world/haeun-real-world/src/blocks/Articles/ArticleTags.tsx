export const ArticleTags = ({tagList}) => {
    return (
        <ul className="tag-list">
            {
                tagList.map((tag) => (
                    <li className="tag-default tag-pill tag-outline ng-binding ng-scope">
                        {tag}
                    </li>
                ))
            }
        </ul>
    );
}