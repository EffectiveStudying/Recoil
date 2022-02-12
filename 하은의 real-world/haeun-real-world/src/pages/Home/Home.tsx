import { Articles, FiltersTag, Tags, YourFeed, GlobalFeed, } from "../../blocks";

const Home = () => {
    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1 className="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <ul className="nav nav-pills outline-active">
                                <YourFeed />
                                <GlobalFeed />
                                <FiltersTag />
                            </ul>
                        </div>
                        <Articles />
                    </div>
                    <Tags />
                </div>
            </div>
        </div>
    );
}

export default Home;