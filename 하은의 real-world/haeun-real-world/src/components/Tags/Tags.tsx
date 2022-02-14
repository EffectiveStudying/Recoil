import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import axios from "axios";
import { selector } from "recoil";
import { $currentPageNumState, $currentTagState } from "../../atoms";


export const tagListSelector = selector({
    key: 'tagListSelector',
    get: async() => {
        try{
            const response = await axios.get(
                `https://conduit.productionready.io/api/tags`
            );
            return response.data;
        }catch (e) {
            return [];
        }
    }
});

export const Tags = () => {
    const tags = useRecoilValueLoadable(tagListSelector);
    const setCurrentTag = useSetRecoilState($currentTagState);
    const setCurrentPageNum = useSetRecoilState($currentPageNumState);

    function tagSelected(tag) {
        setCurrentTag(tag);
        setCurrentPageNum(0);
    }
    
    switch (tags.state){
        case 'hasValue':
            const tagList = tags.contents.tags.map((tag) => (
                <div className="tag-pill tag-default" onClick={() => tagSelected(tag)}>{tag}</div>
            ));
            return (
                <div className="col-md-3">
                    <div className="sidebar">
                        <p>Popular Tags</p>
                        <div className="tag-list">
                            { tagList }
                        </div>
                    </div>
                </div>
            );
        case 'loading':
            return <div>Loading Tags...</div>
        case 'hasError':
            throw tags.contents
    }    
}