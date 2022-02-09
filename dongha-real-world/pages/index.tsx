import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import Tags from 'components/Tags';
import type { NextPage } from 'next';
import { useRecoilValueLoadable } from 'recoil';
import { $tags } from 'stores/tag.store';

const Home: NextPage = () => {
    const tagsLoadable = useRecoilValueLoadable($tags);
    if (tagsLoadable.state === 'loading') {
        return <div>loading...</div>;
    }
    if (tagsLoadable.state === 'hasError') {
        return <div>error</div>;
    }
    const tags = tagsLoadable.contents;

    return (
        <>
            <Nav />
            <div className="home-page">
                <Banner />

                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="feed-toggle">
                                <ul className="nav nav-pills outline-active">
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="">
                                            Your Feed
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="">
                                            Global Feed
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="article-preview">
                                <div className="article-meta">
                                    <a href="profile.html">
                                        <img src="http://i.imgur.com/Qr71crq.jpg" />
                                    </a>
                                    <div className="info">
                                        <a href="" className="author">
                                            Eric Simons
                                        </a>
                                        <span className="date">January 20th</span>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                        <i className="ion-heart"></i> 29
                                    </button>
                                </div>
                                <a href="" className="preview-link">
                                    <h1>How to build webapps that scale</h1>
                                    <p>This is the description for the post.</p>
                                    <span>Read more...</span>
                                </a>
                            </div>

                            <div className="article-preview">
                                <div className="article-meta">
                                    <a href="profile.html">
                                        <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                                    </a>
                                    <div className="info">
                                        <a href="" className="author">
                                            Albert Pai
                                        </a>
                                        <span className="date">January 20th</span>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                        <i className="ion-heart"></i> 32
                                    </button>
                                </div>
                                <a href="" className="preview-link">
                                    <h1>
                                        The song you won't ever stop singing. No matter how hard you
                                        try.
                                    </h1>
                                    <p>This is the description for the post.</p>
                                    <span>Read more...</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Tags list={tags} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
