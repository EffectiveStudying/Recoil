import { FiltersTag } from "./FiltersTag";
import { GlobalFeed } from "./GlobalFeed";
import { YourFeed } from "./YourFeed";

export const Tabs = () => {
    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                <YourFeed />
                <GlobalFeed />
                <FiltersTag />
            </ul>
        </div>
    );
}