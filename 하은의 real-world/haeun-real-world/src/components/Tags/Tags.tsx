import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import axios from "axios";
import { selector } from "recoil";
import { $currentPageNumState, $currentTagState } from "../../atoms";
import { apiUrlBase } from "../../types";


export const tagListSelector = selector({
    key: 'tagListSelector',
    get: async() => {
        try{
            const response = await axios.get(
                `${apiUrlBase}/tags`
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
            return (
                <div className="col-md-3">
                    <div className="sidebar">
                        <p>Popular Tags</p>
                        <div className="tag-list">
                            { 
                                tags.contents.tags.map((tag) => (
                                    <div key={`${tag}`} className="tag-pill tag-default" onClick={() => tagSelected(tag)}>{tag}</div>
                                )) 
                            }
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