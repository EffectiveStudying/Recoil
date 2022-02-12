import ArticlePreviewList from 'components/Article/ArticlePreviewList';
import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
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
            <Header />
            <div className="home-page">
                <Banner />

                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="feed-toggle">
                                <ul className="nav nav-pills outline-active">
                                    {/* <li className="nav-item">
                                        <a className="nav-link disabled" href="">
                                            Your Feed
                                        </a>
                                    </li> */}
                                    <li className="nav-item">
                                        <a className="nav-link active" href="">
                                            Global Feed
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ArticlePreviewList />
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
