import { Articles, Pagination, Tabs, Tags } from "../../blocks";

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
                    <Tabs />
                    <Articles />
                    <Pagination />
                </div>
                <Tags />
            </div>
        </div>
        </div>
    );
}

export default Home;