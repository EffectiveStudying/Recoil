import { Articles, Tabs, Tags } from "../../components";

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
                </div>
                <Tags />
            </div>
        </div>
        </div>
    );
}

export default Home;